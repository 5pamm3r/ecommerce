import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../../products/types";
import api from "../../products/api";
import {
  Button,
  Flex,
  Grid,
  Image,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

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
      <Stack spacing={6}>
        <Grid
          gridGap={6}
          templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
        >
          {products.map((product) => (
            <Stack
              key={product.id}
              spacing={3}
              padding={4}
              borderRadius="md"
              backgroundColor="gray.100"
            >
              <Image
                as={motion.img}
                cursor="pointer"
                layoutId={product.image}
                alt={product.title}
                borderTopRadius="md"
                maxHeight={128}
                objectFit="cover"
                src={product.image}
                onClick={()=>setSelectedImage(product.image)}
              />
              <Stack spacing={1}>
                <Text>{product.title}</Text>
                <Text fontSize="sm" fontWeight={500} color="green.500">
                  {parseCurrency(product.price)}
                </Text>
              </Stack>
              <Button
                colorScheme="primary"
                size="sm"
                variant="outline"
                onClick={() => handleAddToCart(product)}
              >
                Agregar
              </Button>
            </Stack>
          ))}
        </Grid>
        {Boolean(cart.length) && (
          <Flex
            alignItems="center"
            bottom={4}
            justifyContent="center"
            position="sticky"
          >
            <Button
              isExternal
              as={Link}
              colorScheme="whatsapp"
              width="fit-content"
              href={`https://wa.me/43214123?text=${encodeURIComponent(text)}`}
            >
              Completar pedido ({cart.length} productos)
            </Button>
          </Flex>
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
