import { Flex, Button, Image, Link, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Product } from "../products/types"

type SendbuttonProps = {
  cart: any
  text: string
  parseCurrency: any
}

function SendButton({ cart, text, parseCurrency }: SendbuttonProps) {
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
        {cart.length} items ({parseCurrency(cart.reduce((total: number, product: Product) => total + product.price, 0))})
      </Button>
    </Flex>
  )
}

export default SendButton