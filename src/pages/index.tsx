import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../../products/typesProduct";
import { Category } from "../../products/typesCategory";
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
import ItemCategory from "../../components/ItemCategory";
import { CATEGORIES } from "../../products/CATEGORIES";


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
  const [categorySelected, setCategorySelected] = React.useState<Category['title']>(CATEGORIES[0].title)
  const [productsSelected, setProductsSelected] = React.useState<Product[]>(products)
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

  const changeProduct = (category: Category['title']) => {
    if (category === 'All') {
      setProductsSelected(products)
    } else {
      const newArr: Product[] = []
      products.map((p) => {
        if (p.category === category) {
          newArr.push(p)
        }
      })
      setProductsSelected(newArr)
    }
  }

  const handleAddToCart = (product: Product) => {
    setCart((cart) => cart.concat(product));
  };
  return (
    <Stack>
      <Header />
      <NavCategories
        CATEGORIES={CATEGORIES}
        render={(cat: any) => (
          <ItemCategory
            key={cat.title}
            changeProduct={() => changeProduct(cat.title)}
            title={cat.title}
            image={cat.image}

          />
        )}
      />
      <Stack spacing={6}>
        <Grid
          gridGap={6}
          // templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
          templateColumns='1fr'
          backgroundColor="white"
          borderTopRadius="20px"

        >
          {productsSelected.map((product) => (
            <ItemProduct
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              setSelectedImage={setSelectedImage}
              parseCurrency={parseCurrency(product.price)}
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
            onClick={() => setSelectedImage('')}
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
