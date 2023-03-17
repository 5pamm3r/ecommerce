import { Box, Image, VStack, Text, Button, Grid, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import { Product } from "../products/typesProduct"

interface Props {
  product: Product;
  handleAddToCart: any;
  setSelectedImage: (value: string) => void;
  price: string;
  children: any;
}

const ItemProduct: React.FC<Props> = ({ product, handleAddToCart, setSelectedImage, price, children }) => {
  return (
    <Grid
      padding={4}
      borderRadius="md"
      templateColumns='auto 1fr auto'
      alignItems='center'
      gap={[5, 10, 20]}
      backgroundColor='white'
    >
      <Box w={[ '50px', '80px', '120px', '160px']} h={'fit-content'} >
        <Image
          w='100%'
          as={motion.img}
          cursor="pointer"
          layoutId={product.image}
          alt={product.title}
          borderTopRadius="md"
          maxHeight={128}
          objectFit="cover"
          src={product.image}
          loading='lazy'
          onClick={() => setSelectedImage(product.image)}
        />
      </Box>
      <VStack spacing={1} align='start' fontSize={['sm', 'md', 'xl']} w='fit-content' >
        <Text noOfLines={1} fontWeight='bold'>{product.title}</Text>
        <Text fontWeight={500} color="#236441">
          {price}
        </Text>
        {children}
      </VStack>
      <Button
        colorScheme="primary"
        size="sm"
        variant="outline"
        onClick={() => handleAddToCart(product)}
        w='fit-content'
      >
        Add
      </Button>
    </Grid>
  )
}
export default ItemProduct