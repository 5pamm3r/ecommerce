import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  IconButton,
  Image,
  HStack,
  VStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../products/typesProduct";
import { AddIcon, MinusIcon, TimeIcon } from "@chakra-ui/icons";

interface Props {
  title: Product["title"];
  description: Product["description"];
  parseCurrency: (value: number) => string;
  price: Product["price"];
  handleAddToCart: any;
  product: Product;
  image: Product["image"];
}

const ProductModal: React.FC<Props> = ({
  title,
  description,
  parseCurrency,
  price,
  handleAddToCart,
  product,
  image,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = React.useState<number>(1);
  const [total, setTotal] = React.useState<string>("");

  const add = () => {
    setCount(count + 1);
  };
  const remove = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };

  React.useEffect(() => {
    setTotal(parseCurrency(price * count));
  }, [count]);

  const closeModal = () => {
    handleAddToCart(product, count);
    onClose();
  };
  return (
    <>
      <Button variant="link" mt="0" size="sm" onClick={onOpen}>
        Details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          marginLeft="10px"
          marginRight="10px"
          backgroundColor="gray.100"
        >
          <Box backgroundColor="gray.100" borderRadius="10px 10px 0 0">
            <ModalCloseButton />
            <Image w="200px" m="50px auto" src={image} alt={title} />
          </Box>
          <Box borderRadius="20px 20px 0 0" backgroundColor="white">
            <ModalHeader pb="0px">{title}</ModalHeader>
            <HStack pl={6}>
              <TimeIcon boxSize={4} />
              <Text>20 - 30 min</Text>
            </HStack>
            <ModalBody>
              <Text>{description}</Text>
              <HStack justify="space-between" mt={6}>
                <HStack
                  height="fit-content"
                  fontSize={["sm", "md", "lg"]}
                  border="1px solid black"
                  borderRadius="10px"
                  backgroundColor="gray.100"
                >
                  <IconButton
                    fontSize={[10, 13, 16]}
                    backgroundColor="transparent"
                    border="none"
                    borderRadius="10px 0 0 10px"
                    aria-label="remove"
                    onClick={remove}
                    icon={<MinusIcon />}
                  />
                  <Text backgroundColor="transparent" fontWeight="bold">
                    {count}
                  </Text>
                  <IconButton
                    fontSize={[10, 13, 16]}
                    backgroundColor="transparent"
                    border="none"
                    borderRadius="0 10px 10px 0"
                    aria-label="add"
                    onClick={add}
                    icon={<AddIcon />}
                  />
                </HStack>
                <Text>{total}</Text>
              </HStack>
            </ModalBody>

            <ModalFooter display="flex" flexDir="column">
              <Button colorScheme="orange" m="20px auto 0" onClick={closeModal}>
                Add to Cart
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProductModal;
