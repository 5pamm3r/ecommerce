import { HStack, Box, Image, VStack, Text, Button, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import { Product } from "../products/typesProduct"
import ProductModal from "./ProductModal"

interface Props {
  product: Product;
  handleAddToCart: any;
  setSelectedImage: (value: string) => void;
  parseCurrency: string;
}

const ItemProduct: React.FC<Props> = ({ product, handleAddToCart, setSelectedImage, parseCurrency }) => {
  return (
    <HStack
      spacing={3}
      padding={4}
      borderRadius="md"
      justify="space-between"
    >
      <Box w='120px' h='120px'>
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
      <VStack spacing={1} align='start'>
        <Text fontWeight='bold'>{product.title}</Text>
        <Text fontSize="sm" fontWeight={500} color="green.500">
          {parseCurrency}
        </Text>
        <ProductModal title={product.title} description={product.description} />
      </VStack>
      <Button
        colorScheme="primary"
        size="sm"
        variant="outline"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </Button>
    </HStack>
  )
}
export default ItemProduct