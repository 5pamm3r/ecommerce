import { VStack, Heading, Box, Flex, Image, IconButton, Divider } from "@chakra-ui/react"
import React from "react";
import { Product } from "../products/typesProduct";
import ModalCart from "./ModalCart";

interface Props {
  children: any
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
       {children}
        <Image
          borderRadius={9999}
          src="//placehold.it/40x40"
          align="flex-end"
        />
      </Flex>
      <VStack align="flex-start">
        <Heading as="h1" mt={2}>
          Food Truck Delivery
        </Heading>
        <Heading as="h2" mt={0} size="md">
          In less than 20 min
        </Heading>
      </VStack>
      <Divider marginY={6} />
    </Box>
  )
}
export default Header