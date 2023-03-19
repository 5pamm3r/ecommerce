import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Image, Stack } from '@chakra-ui/react';
import { Product } from '../products/typesProduct';
interface Props {
  selectedImage: Product['image'];
  setSelectedImage: (value: string) => void
}

const ExpandImage: React.FC<Props> = ({ selectedImage, setSelectedImage}) => {
  return (
    <AnimatePresence>
          <Stack
            key="backdrop"
            alignItems="center"
            as={motion.div}
            backgroundColor="rgba(0,0,0,0.5)"
            justifyContent="center"
            layoutId={selectedImage}
            position="fixed"
            top={0}
            left={0}
            height="100%"
            width="100%"
            onClick={() => setSelectedImage("")}
          >
            <Image key="image" src={selectedImage}></Image>
          </Stack>
      </AnimatePresence>
  )
}
export default ExpandImage;