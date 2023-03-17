import { Button, Image, Link, Stack, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

interface Props {
  text: string;
  totalPrice: string;
  totalItems: number;
}

const SendButton: React.FC<Props> = ({ text, totalPrice, totalItems }) => {
  return (
    <Stack
      align="center"
      bottom={4}
      justify="center"
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
        href={`https://wa.me/${process.env.NEXT_PUBLIC_NUMBER}?text=${encodeURIComponent(text)}`}
        leftIcon={
          <Image src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff" alt='' />
        }
      >
        {totalItems} items ({totalPrice})
      </Button>
    </Stack>
  )
}

export default SendButton