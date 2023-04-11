import { Box, Image } from '@chakra-ui/react'
import React from 'react'

interface Props {
  image: string;
  title: string;
}

const IconCategory: React.FC<Props> = ({ image, title }) => {
  return (
    <Box w={['30px', '30px', '40px']}>
      <Image src={image} w='100%' objectFit='contain' alt={title} />
    </Box>
  )
}

export default IconCategory