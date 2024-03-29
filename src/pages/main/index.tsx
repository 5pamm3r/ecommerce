import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../../../products/typesProduct";
import { Category } from "../../../products/typesCategory";
import api from "../../../products/api";
import { Button, Stack } from "@chakra-ui/react";
import NavCategories from "../../../components/NavCategories";
import Header from "../../../components/Header";
import ItemProduct from "../../../components/ItemProduct";
import SendButton from "../../../components/SendButton";
import ItemCategory from "../../../components/ItemCategory";
import { CATEGORIES } from "../../../products/CATEGORIES";
import ListProduct from "../../../components/ListProduct";
import ModalCart from "../../../components/ModalCart";
import ItemCart from "../../../components/ItemCart";
import { ItemCartTypes } from "../../../products/typesItemCart";
import ProductModal from "../../../components/ProductModal";
import ExpandImage from "../../../components/ExpandImage";
import Head from "next/head";
import Search from "../../../components/Search";
import { useFoodTruck } from "../../../components/useFoodTruck";
import ViewMore from "../../../components/ViewMore";
import { useLocalStorage } from "../../../components/useLocalStorage";
import { User } from "../../../products/typeUser";

interface Props {
  products: Product[];
}
const IndexRoute: React.FC<Props> = ({ products }) => {
  const [localUser, setLocalUser] = useLocalStorage('Food-Truck-V1', { name: '', address: '' });
  const [name, setName] = React.useState<User['name']>('');
  const [address, setAddress] = React.useState<User['address']>('');
  const [productsSelected, setProductsSelected] =
    React.useState<Product[]>(products);
  const [searchedValue, setSearchedValue] = React.useState<string>("");
  let searchedProducts: Product[];

  React.useEffect(() => {
    setName(localUser.name);
    setAddress(localUser.address);
    console.log('big')
  }, [localUser])

  if (!searchedValue) {
    searchedProducts = productsSelected;
  } else {
    searchedProducts = productsSelected.filter((e) => {
      const title = e.title.toLowerCase();
      const value = searchedValue.toLowerCase();
      return title.includes(value);
    });
  }

  const changeProduct = (category: Category["title"]) => {
    if (category === "All") {
      setProductsSelected(products);
    } else {
      const newArr: Product[] = [];
      products.map((p) => {
        if (p.category === category) {
          newArr.push(p);
        }
      });
      setProductsSelected(newArr);
    }
  };
  const {
    cart,
    selectedImage,
    setSelectedImage,
    deliveryFee,
    subTotal,
    totalItemsCart,
    text,
    handleAddToCart,
    onDelete,
    parseCurrency,
    numItems,
    setNumItems,
    categoryBgState,
    setCategoryBgState,
  } = useFoodTruck();
  return (
    <Stack>
      <Head>
        <title>Food Truck</title>
      </Head>
      <Header
        address={address}
        username={name}
      >
        <ModalCart
          cart={cart}
          parseCurrency={parseCurrency}
          deliveryFee={deliveryFee}
          subTotal={subTotal}
          totalItems={totalItemsCart}
          render={(item: ItemCartTypes) => (
            <ItemCart
              key={item.id}
              image={item.image}
              count={item.count}
              title={item.title}
              total={parseCurrency(item.total)}
              onDelete={() => onDelete(item.id)}
            />
          )}
        >
          {Boolean(cart.length) && (
            <SendButton
              text={text}
              totalItems={totalItemsCart}
              totalPrice={parseCurrency(subTotal + deliveryFee)}
            />
          )}
        </ModalCart>
      </Header>
      <Search
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />
      <NavCategories
        CATEGORIES={CATEGORIES}
        render={(cat: Category) => (
          <ItemCategory
            key={cat.title}
            changeProduct={() => changeProduct(cat.title)}
            title={cat.title}
            image={cat.image}
            categoryBgState={categoryBgState}
            setCategoryBgState={setCategoryBgState}
          />
        )}
      />
      <ListProduct
        searchedProducts={searchedProducts}
        numItems={numItems}
        render={(product: Product) => (
          <ItemProduct
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            setSelectedImage={setSelectedImage}
            price={parseCurrency(product.price)}
          >
            <ProductModal
              title={product.title}
              description={product.description}
              parseCurrency={parseCurrency}
              price={product.price}
              product={product}
              handleAddToCart={handleAddToCart}
              image={product.image}
            />
          </ItemProduct>
        )}
      >
        {Boolean(cart.length) && (
          <SendButton
            text={text}
            totalItems={totalItemsCart}
            totalPrice={parseCurrency(subTotal + deliveryFee)}
          />
        )}
        <ViewMore numItems={numItems} setNumItems={setNumItems} />
      </ListProduct>
      {selectedImage && (
        <ExpandImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      ;
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
export default IndexRoute;
