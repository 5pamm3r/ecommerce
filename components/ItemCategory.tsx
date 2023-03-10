import { VStack, Image, Text } from "@chakra-ui/react"
import React from "react";
import { Product } from "../products/typesProduct";

interface Props {
  title: Product['title'];
  image: Product['image'];
  changeProduct: VoidFunction;
}

const ItemCategory: React.FC<Props> = ({ title, image, changeProduct }) => {
  return (
    <>
      <VStack fontSize={['xs', 'sm', 'md']} p={4} borderRadius='20px' _hover={{ backgroundColor: 'white' }} onClick={(e)=>changeProduct()}>
          <Image w={['30px', '40px', '50px']} minW='30px' src={image} alt="All menu" />
          <Text fontWeight='bold'>{title}</Text>
      </VStack>
    </>
  )
}

export default ItemCategory