import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../../products/typesProduct";
import { Category } from "../../products/typesCategory";
import api from "../../products/api";
import { Flex, Img, Stack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import NavCategories from "../../components/NavCategories";
import Header from "../../components/Header";
import ItemProduct from "../../components/ItemProduct";
import SendButton from "../../components/SendButton";
import ItemCategory from "../../components/ItemCategory";
import { CATEGORIES } from "../../products/CATEGORIES";
import ListProduct from "../../components/ListProduct";
import ModalCart from "../../components/ModalCart";
import ItemCart from "../../components/ItemCart";
import { ItemCartTypes } from "../../products/typesItemCart";

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
  const [count, setCount] = React.useState<number>(1);
  
  
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
        )}`
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

  const handleAddToCart = (product: Product) => {
    const newItem = {
      ...product,
      id: (Math.random()*1000).toString()
    }
    setCart((cart:any) => cart.concat(newItem));
    console.log(cart)

  };
  return (
    <Stack>
      <Header>
        <ModalCart 
          cart={cart}
          render={(item:Product)=>(
            <ItemCart 
              key={item.id}
              image={item.image}
              count={count}
              title={item.title}
              total={parseCurrency(item.price * count)}
            />
          )}
        />
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
      <Stack spacing={6}>
        <ListProduct
          productsSelected={productsSelected}
          render={(product: Product) => (
            <ItemProduct
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              setSelectedImage={setSelectedImage}
              parseCurrency={parseCurrency(product.price)}
            />
          )}
        ></ListProduct>
        {Boolean(cart.length) && (
          <AnimatePresence>
            <SendButton
              cart={cart}
              text={text}
              parseCurrency={parseCurrency(
                cart.reduce(
                  (total: number, product: Product) => total + product.price,
                  0
                )
              )}
            />
          </AnimatePresence>
        )}
      </Stack>
      <AnimatePresence>
        {selectedImage && (
          <Flex
            key="backdrop"
            alignItems="center"
            as={motion.div}
            backgroundColor="rgba(0,0,0,0.5)"
            justifyContent="center"
            layoutId={selectedImage}
            position="fixed"
            top={0}
            left={0}
            height="100%"
            width="100%"
            onClick={() => setSelectedImage("")}
          >
            <Img key="image" src={selectedImage}></Img>
          </Flex>
        )}
      </AnimatePresence>
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
