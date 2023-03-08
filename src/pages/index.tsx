import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../../products/types";
import api from "../../products/api";
import { Button, Grid, Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  products: Product[];
}

const parseCurrency = (value: number): string => {
  return value.toLocaleString('es-UY', {
    style: 'currency',
    currency: 'UYU',
  })
}
const IndexRoute: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const text = React.useMemo(() => {
    return cart
      .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), "")
      .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`);
  }, [cart])


  const handleAddToCart = (product: Product) => {
    setCart((cart) => cart.concat(product));
  };
  return (
    <Stack spacing={6}>
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
        {products.map((product) => (
          <Stack key={product.id} spacing={3} padding={4} borderRadius='md' backgroundColor="gray.100">
            <Stack spacing={1}>
              <Text>{product.title}</Text>
              <Text fontSize='sm' fontWeight={500} color='green.500'>{parseCurrency(product.price)}</Text>
            </Stack>
            <Button colorScheme="primary" size='sm' variant='outline' onClick={() => handleAddToCart(product)}>
              Agregar
            </Button>
          </Stack>
        ))}
      </Grid>
      {Boolean(cart.length) && (
        <Button
          width='fit-content'
          display='block'
          margin='auto'
          as={Link}
          colorScheme="whatsapp"
          href={`https://wa.me/099319362?text=${encodeURIComponent(text)}`}
        >
          Completar pedido ({cart.length} productos)
        </Button>
      )}
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
