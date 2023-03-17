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
      gridGap={2}
      templateColumns='1fr'
      borderTopRadius="20px"

    >
      {productsSelected.map(render)}
    </Grid>
  )
}

export default ListProduct