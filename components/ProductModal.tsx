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
  useDisclosure
} from '@chakra-ui/react'

type ModalProps = {
  title: string
  content: string
}

function ProductModal({title, content}:ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button variant='link' size='sm' onClick={onOpen}>Details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>  
          <ModalCloseButton />
          <ModalBody>
            <Text>{content}</Text>
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