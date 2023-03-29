import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../products/typesProduct";

interface Props {
  title: Product["title"];
  image: Product["image"];
  changeProduct: VoidFunction;
}

const ItemCategory: React.FC<Props> = ({ title, image, changeProduct }) => {
  return (
    <>
      <HStack
        fontSize={["sm", "md"]}
        p='8px 16px'
        mt={4}
        mb={4}
        borderRadius="20px"
        _hover={{ backgroundColor: 'orange.200' }}
        onClick={(e) => changeProduct()}
        cursor='pointer'
      >
        <Image
          w={["30px", "40px", "50px"]}
          minW="30px"
          src={image}
          alt="All menu"
        />
        <Text fontWeight="bold">{title}</Text>
      </HStack>
    </>
  );
};

export default ItemCategory;
