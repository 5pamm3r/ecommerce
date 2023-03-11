import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../../products/types";
import api from "../../products/api";
import {
  Flex,
  Grid,
  Img,
  Stack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import NavCategories from "../../components/NavCategories";
import Header from "../../components/Header";
import ItemProduct from "../../components/ItemProduct";
import SendButton from "../../components/SendButton";

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
  const [cart, setCart] = React.useState<Product[]>([]);
  const [totalCart, setTotalCart] = React.useState<number>(0);
  const [selectedImage, setSelectedImage] = React.useState<string>('');
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

  const handleAddToCart = (product: Product) => {
    setCart((cart) => cart.concat(product));
  };
  return (
    <Stack>
      <Header />
      <NavCategories />
      <Stack spacing={6}>
        <Grid
          gridGap={6}
          // templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
          templateColumns='1fr'
          backgroundColor="white"
          borderTopRadius="20px"

        >
          {products.map((product) => (
            <ItemProduct 
              key={product.id}
              product={product} 
              handleAddToCart={handleAddToCart} 
              setSelectedImage={setSelectedImage} 
              parseCurrency={parseCurrency}
            />
          ))}
        </Grid>
        {Boolean(cart.length) && (
          <AnimatePresence>
            <SendButton cart={cart} text={text} parseCurrency={parseCurrency} />
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
            position='fixed'
            top={0}
            left={0}
            height='100%'
            width='100%'
            onClick={()=>setSelectedImage('')}
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
