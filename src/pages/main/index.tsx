import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../../../products/typesProduct";
import { Category } from "../../../products/typesCategory";
import api from "../../../products/api";
import { Stack } from "@chakra-ui/react";
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
import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
  products: Product[];
}

const parseCurrency = (value: number): string => {
  return value.toLocaleString("es-UY", {
    style: "currency",
    currency: "UYU",
  });
};
const IndexRoute: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = React.useState<ItemCartTypes[]>([]);
  const [selectedImage, setSelectedImage] =
    React.useState<Product["image"]>("");
  const [productsSelected, setProductsSelected] =
    React.useState<Product[]>(products);  
  const router = useRouter();
  const { address } = router.query

  const text = React.useMemo(() => {
    return cart
      .reduce(
        (message, product) =>
          message.concat(
            `* ${product.title} - ${parseCurrency(product.price)}\n`
          ),
        ""
      )
      .concat(
        `\nTotal: ${parseCurrency(
          cart.reduce((total, product) => total + product.price, 0)
        )}
        \nDireccion: ${address}
        `
      );
  }, [cart]);

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

  const handleAddToCart = (product: Product, count?: number) => {
    const newItem = {
      ...product,
      id: (Math.random() * 1000).toString(),
      count: count || 1,
      total: (count || 1) * product.price,
    };
    setCart((cart: any) => cart.concat(newItem));
  };

  const onDelete = (id: ItemCartTypes["id"]) => {
    setCart((cart) => cart.filter((e) => e.id !== id));
  };
  return (
    <Stack>
      <Head>
        <title>Food Truck</title>
      </Head>
      <Header address={address}>
        <ModalCart
          cart={cart}
          parseCurrency={parseCurrency}
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
              totalItems={cart.reduce(
                (total: number, e: ItemCartTypes) => total + e.count,
                0
              )}
              totalPrice={parseCurrency(
                cart.reduce(
                  (total: number, e: ItemCartTypes) => total + e.total,
                  0
                )
              )}
            />
          )}
        </ModalCart>
      </Header>
      <NavCategories
        CATEGORIES={CATEGORIES}
        render={(cat: Category) => (
          <ItemCategory
            key={cat.title}
            changeProduct={() => changeProduct(cat.title)}
            title={cat.title}
            image={cat.image}
          />
        )}
      />
      <ListProduct
        productsSelected={productsSelected}
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
            totalItems={cart.reduce(
              (total: number, e: ItemCartTypes) => total + e.count,
              0
            )}
            totalPrice={parseCurrency(
              cart.reduce(
                (total: number, e: ItemCartTypes) => total + e.total,
                0
              )
            )}
          />
        )}
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
