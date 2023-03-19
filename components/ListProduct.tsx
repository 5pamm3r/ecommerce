import { Grid, Stack } from "@chakra-ui/react"
import React from "react";
import { Product } from "../products/typesProduct"

interface Props {
  productsSelected: Product[];
  render: (value: Product, index: number, array: Product[]) => React.ReactNode;
  children: React.ReactNode;
}

const ListProduct: React.FC<Props> = ({ productsSelected, render, children }) => {
  return (
    <Stack spacing={6} pt={6}>
      <Grid
        gridGap={2}
        templateColumns={{ sm: '1fr', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', xl: 'repeat(5,1fr)', '2xl': 'repeat(5,1fr)'}}
        borderTopRadius="20px"

      >
        {productsSelected.map(render)}
      </Grid>
      {children}
    </Stack>
  )
}

export default ListProduct