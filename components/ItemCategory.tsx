import { Button } from "@chakra-ui/react";
import React from "react";
import { Product } from "../products/typesProduct";
import IconCategory from "./IconCategory";

interface Props {
  title: Product["title"];
  image: Product["image"];
  changeProduct: VoidFunction;
  categoryBgState: string;
  setCategoryBgState: (value: string) => void;
}

const ItemCategory: React.FC<Props> = ({
  title,
  image,
  changeProduct,
  categoryBgState,
  setCategoryBgState,
}) => {
  const onClick = (value: string) => {
    setCategoryBgState(value);
    changeProduct();
  };
  return (
    <>
      <Button
        onClick={() => onClick(title)}
        variant={categoryBgState === title ? "solid" : "outline"}
        colorScheme='teal'
        leftIcon={<IconCategory image={image} title={title} />}
        w='120px'
        p={['5px 0', '5px 4px', '5px 8px']}
        m='5px 5px 0 5px'
        fontSize={['sm', 'md']}
      >
        {title}
      </Button>
    </>
  );
};

export default ItemCategory;
