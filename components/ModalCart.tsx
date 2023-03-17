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
  Button,
  Text,
  HStack,
  Heading
} from '@chakra-ui/react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ItemCartTypes } from '../products/typesItemCart';

interface Props {
  cart: ItemCartTypes[]
  render: any
  parseCurrency: (value: number) => string;
}

const ModalCart: React.FC<Props> = ({ cart, render, parseCurrency }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef()

  return (
    <>
      <IconButton
          aria-label="settings"
          size='xs'
          ml={-2}
          icon={<AiOutlineShoppingCart style={{width: '100%', height:'100%'}} />}
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

          <DrawerFooter display='flex' flexDir='column'>
            <HStack mb={8} justify='space-between' w='100%'>
              <Heading as='h3'>Total</Heading>
              <Text>{parseCurrency(cart.reduce((total:number, e:ItemCartTypes) => total + e.total, 0))}</Text>
            </HStack>
            <Button colorScheme='whatsapp' m='auto'>Send order</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default ModalCart