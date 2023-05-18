import React, { ReactNode } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Text,
  HStack,
  Heading,
  Box,
  VStack,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ItemCartTypes } from "../products/typesItemCart";

interface Props {
  cart: ItemCartTypes[];
  render: any;
  parseCurrency: (value: number) => string;
  children: ReactNode;
  deliveryFee: number;
  subTotal: number;
  totalItems: number;
}

const ModalCart: React.FC<Props> = ({
  cart,
  render,
  parseCurrency,
  children,
  deliveryFee,
  subTotal,
  totalItems,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <Box position="relative">
        <Text
          as="span"
          position="absolute"
          top="-11px"
          left="9px"
          color="orange.400"
          fontWeight="bold"
          zIndex="1"
          onClick={onOpen}
        >
          {totalItems > 0 ? totalItems : ""}
        </Text>
        <IconButton
          backgroundColor="transparent"
          color="whiteAlpha.800"
          aria-label="settings"
          size="xs"
          icon={
            <AiOutlineShoppingCart style={{ width: "100%", height: "100%" }} />
          }
          onClick={onOpen}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Order</DrawerHeader>

          <DrawerBody backgroundColor="gray.100" borderRadius="20px 20px 0 0">
            {cart.map(render)}
          </DrawerBody>

          <DrawerFooter
            display="flex"
            flexDir="column"
            marginTop="-20px"
            borderRadius="20px 20px 0 0"
            backgroundColor="whiteAlpha.900"
          >
            <VStack w="100%">
              <HStack w="100%" justify="space-between">
                <Heading as="h4" size="xs" fontWeight="400">
                  Sub total
                </Heading>
                <Text fontSize="xs" fontWeight="400">
                  {parseCurrency(subTotal)}
                </Text>
              </HStack>
              <HStack w="100%" justify="space-between">
                <Heading as="h4" size="xs" fontWeight="400">
                  Delivery Fee
                </Heading>
                <Text fontSize="xs" fontWeight="400">
                  {parseCurrency(deliveryFee)}
                </Text>
              </HStack>
            </VStack>
            <Divider m="8px 0" variant="dashed" />
            <HStack mb={8} justify="space-between" w="100%">
              <Heading as="h3" size="md">
                Total
              </Heading>
              <Text fontWeight="bold">
                {parseCurrency(subTotal + deliveryFee)}
              </Text>
            </HStack>
            {children}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ModalCart;
