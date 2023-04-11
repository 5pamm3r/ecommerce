import { Stack } from "@chakra-ui/react";
import React from "react";
import { Category } from "../products/typesCategory";

interface Props {
  CATEGORIES: Category[];
  render: (
    value: Category,
    index: number,
    array: Category[]
  ) => React.ReactNode;
}

const NavCategories: React.FC<Props> = ({ CATEGORIES, render }) => {
  return (
    <Stack
      overflowX={["scroll", "auto"]}
      whiteSpace={"nowrap"}
      display={["inline-block", "flex"]}
      flexDir="row"
      justify='space-between'
      pb={2}
    >
      {CATEGORIES.map(render)}
    </Stack>
  );
};

export default NavCategories;
