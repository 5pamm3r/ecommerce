import React from 'react'
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
  Input,
  Button,
  Box,
  Text
} from '@chakra-ui/react'
import { DragHandleIcon } from "@chakra-ui/icons";
import { Product } from '../products/typesProduct';
import { ItemCartTypes } from '../products/typesItemCart';

interface Props {
  cart: ItemCartTypes[]
  render: any
}

const ModalCart: React.FC<Props> = ({ cart, render }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef()

  return (
    <>
      <IconButton
          aria-label="settings"
          fontSize="md"
          size="sm"
          icon={<DragHandleIcon />}
          onClick={onOpen}
        />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Order</DrawerHeader>

          <DrawerBody>
            {cart.map(render)}
          </DrawerBody>

          <DrawerFooter>
            <Box>
              <Text>Total</Text>
              <Text>{cart.reduce((total:any, e:any) => total + e.total, 0)}</Text>
            </Box>
            <Button colorScheme='whatsapp' m='auto'>Send order</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default ModalCart