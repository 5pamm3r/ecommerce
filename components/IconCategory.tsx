import { Image } from '@chakra-ui/react'
import React from 'react'

interface Props {
  image: string;
  title: string;
}

const IconCategory: React.FC<Props> = ({ image, title }) => {
  return (
    <>
      <Image src={image} w={['30px', '40px', '50px']} alt={title} />
    </>
  )
}

export default IconCategory