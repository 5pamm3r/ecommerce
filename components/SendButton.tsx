import { Flex, Button, Image, Link, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import { Product } from "../products/typesProduct"

interface Props {
  cart: Product[]
  text: string;
  parseCurrency: string;
}

const SendButton: React.FC<Props> = ({ cart, text, parseCurrency }) => {
  return (
    <Flex
      alignItems="center"
      bottom={4}
      justifyContent="center"
      position="sticky"
      as={motion.div}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <Button
        isExternal
        as={Link}
        colorScheme="whatsapp"
        width="fit-content"
        href={`https://wa.me/0492345?text=${encodeURIComponent(text)}`}
        leftIcon={
          <Image src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff" alt='' />
        }
      >
        {cart.length} items ({parseCurrency})
      </Button>
    </Flex>
  )
}

export default SendButton