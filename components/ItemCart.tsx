import { Box, HStack, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Product } from '../products/typesProduct';
import { DeleteIcon } from '@chakra-ui/icons'

interface Props {
  image: Product['image'];
  count: number;
  title: Product['title'];
  total: string;
}

const ItemCart: React.FC<Props> = ({ image, count, title, total }) => {
  return (
    <HStack fontSize={[ 'xs', 'sm', 'md']} justify='space-between' mb='20px'>
      <Box w='50px'>
        <Image src={image} alt={title} w='100%' />
      </Box>
      <Text>{count}</Text>
      <Text>x</Text>
      <Box >
        <Text>{title}</Text>
        <Text>{total}</Text>
      </Box>
      <IconButton icon={<DeleteIcon />} aria-label='Delete' />
    </HStack>
  )
}

export default ItemCart