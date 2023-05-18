import { Button, Image, Link, Stack, Box } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

interface Props {
  text: string;
  totalPrice: string;
  totalItems: number;
}

const SendButton: React.FC<Props> = ({ text, totalPrice, totalItems }) => {
  console.log(`enviando:  ${text}`)
  return (
    <AnimatePresence>
      <Box
        m='0 auto !important'
        w='fit-content'
        bottom={4}
        position="sticky"
        as={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Button
          isExternal
          as={Link}
          colorScheme="orange"
          width="fit-content"
          href={`https://wa.me/${process.env.NEXT_PUBLIC_NUMBER}?text=${encodeURIComponent(text)}`}
          leftIcon={
            <Image src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff" alt='' boxSize='28px' />
          }
        >
          {totalItems} items ({totalPrice})
        </Button>
      </Box>
    </AnimatePresence>
  )
}

export default SendButton