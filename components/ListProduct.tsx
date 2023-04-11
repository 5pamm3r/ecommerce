import { Grid, Stack } from "@chakra-ui/react"
import React from "react";
import { Product } from "../products/typesProduct"

interface Props {
  searchedProducts: Product[];
  render: (value: Product, index: number, array: Product[]) => React.ReactNode;
  children: React.ReactNode;
  numItems: number;
}

const ListProduct: React.FC<Props> = ({ searchedProducts, render, children, numItems }) => {
  return (
    <Stack spacing={4} pt={1}>
      <Grid
        gridGap={2}
        templateColumns={{ sm: '1fr', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', xl: 'repeat(5,1fr)', '2xl': 'repeat(5,1fr)' }}
        borderTopRadius="20px"

      >
        {searchedProducts.slice(0, numItems).map(render)}
      </Grid>
      {children}
    </Stack>
  )
}

export default ListProduct