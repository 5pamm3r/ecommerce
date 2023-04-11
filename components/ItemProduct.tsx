import {
  Box,
  Image,
  VStack,
  Text,
  IconButton,
  Grid,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Product } from "../products/typesProduct";
import { AddIcon } from "@chakra-ui/icons";

interface Props {
  product: Product;
  handleAddToCart: any;
  setSelectedImage: (value: string) => void;
  price: string;
  children: React.ReactNode;
}

const ItemProduct: React.FC<Props> = ({
  product,
  handleAddToCart,
  setSelectedImage,
  price,
  children,
}) => {
  return (
    <Grid
      padding={4}
      borderRadius="md"
      // templateColumns='auto 1fr auto'
      alignItems="center"
      gap={[5, 10, 8]}
      backgroundColor="white"
      gridTemplateColumns={[
        "auto 1fr auto",
        "auto 1fr auto",
        "auto",
        "auto",
        "auto",
      ]}
      gridTemplateRows={[
        "auto",
        "auto",
        "auto 1fr auto",
        "auto 1fr auto",
        "auto 1fr auto",
      ]}
      h="fit-content"
      justifyItems={{ base: "start", md: "center" }}
    >
      <Box
        w={["50px", "80px", "120px", "160px"]}
        h={["50px", "80px", "120px", "160px"]}
        alignItems="center"
        display="flex"
      >
        <Image
          w="100%"
          as={motion.img}
          cursor="pointer"
          layoutId={product.image}
          alt={product.title}
          borderTopRadius="md"
          maxHeight={128}
          objectFit="cover"
          src={product.image}
          loading="lazy"
          onClick={() => setSelectedImage(product.image)}
        />
      </Box>
      <VStack
        spacing={1}
        align="start"
        fontSize={["sm", "md", "xl"]}
        w="100%"
        justifySelf="start"
      >
        <Text noOfLines={1} fontWeight="bold">
          {product.title}
        </Text>
        <HStack w="100%" justify="space-between">
          <Stack align='flex-start'>
            <Text fontWeight={500} color="#236441">
              {price}
            </Text>
            {children}
          </Stack>
          <Box>
            <IconButton
              aria-label="Add"
              colorScheme='orange'
              icon={<AddIcon />}
              size="sm"
              variant="outline"
              onClick={() => handleAddToCart(product)}
              w="fit-content"
            />
          </Box>
        </HStack>
      </VStack>
    </Grid>
  );
};
export default ItemProduct;
