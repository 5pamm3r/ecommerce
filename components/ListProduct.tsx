import { Grid } from "@chakra-ui/react"
import React from "react";
import { Product } from "../products/typesProduct"

interface Props {
  productsSelected: Product[];
  render: (value: Product, index: number, array:Product[]) => React.ReactNode;
}

const ListProduct: React.FC<Props> = ({ productsSelected, render }) => {
  return (
    <Grid
      gridGap={6}
      // templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      templateColumns='1fr'
      backgroundColor="white"
      borderTopRadius="20px"

    >
      {productsSelected.map(render)}
    </Grid>
  )
}

export default ListProduct