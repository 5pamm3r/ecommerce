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
} from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import { Product } from "../products/typesProduct";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { ItemCartTypes } from "../products/typesItemCart";

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
    if(count <= 1) {
      return
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
      <Button variant="link" size="sm" onClick={onOpen}>
        Details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginLeft="10px" marginRight="10px">
          <ModalCloseButton />
          <Image w="200px" m="50px auto" src={image} alt={title} />
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
            <Text>{description}</Text>
            <HStack justify="space-between" mt={6}>
              <HStack
                height='fit-content'
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
            <HStack mt={6} justify="space-between" w="100%">
              <VStack>
                <Image src="//placehold.it/40x40" />
                <Text>Cheese</Text>
              </VStack>
              <VStack>
                <Image src="//placehold.it/40x40" />
                <Text>Meat</Text>
              </VStack>
              <VStack>
                <Image src="//placehold.it/40x40" />
                <Text>Bacon</Text>
              </VStack>
            </HStack>
            <Button colorScheme="blue" m="20px auto 0" onClick={closeModal}>
              Add to Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProductModal;
