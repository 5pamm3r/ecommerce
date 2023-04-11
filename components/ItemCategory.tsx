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
    <Button
      w={['120px', '120px', '130px', '140px']}
      margin='8px 5px 0 5px !important'
      fontSize={['sm', 'md', 'lg']}
      colorScheme='teal'
      leftIcon={<IconCategory image={image} title={title} />}
      variant={categoryBgState === title ? "solid" : "outline"}
      onClick={() => onClick(title)}
    >
      {title}
    </Button>
  );
};

export default ItemCategory;
