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
  Box
} from '@chakra-ui/react'
import React from 'react'
import { Product } from '../products/typesProduct'

interface Props {
  title: Product['title']
  description: Product['description']
}

const ProductModal: React.FC<Props> = ({title, description}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button variant='link' size='sm' onClick={onOpen}>Details</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent marginLeft='10px' marginRight='10px'>
          <ModalHeader>{title}</ModalHeader>  
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ProductModal