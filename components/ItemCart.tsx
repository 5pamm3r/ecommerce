import { Box, Divider, Grid, HStack, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Product } from '../products/typesProduct';
import { DeleteIcon } from '@chakra-ui/icons'

interface Props {
  image: Product['image'];
  count: number;
  title: Product['title'];
  total: string;
  onDelete: VoidFunction;
}

const ItemCart: React.FC<Props> = ({ image, count, title, total, onDelete }) => {

  return (
    <>
      <Grid fontSize={['sm', 'md']} templateColumns='auto auto auto 1fr auto' gap={2} alignItems='center' mb={4}>
        <Box w='50px'>
          <Image src={image} alt={title} w='100%' />
        </Box>
        <Text>{count}</Text>
        <Text>x</Text>
        <Box >
          <Text noOfLines={1}>{title}</Text>
          <Text>{total}</Text>
        </Box>
        <IconButton icon={<DeleteIcon />} aria-label='Delete' onClick={onDelete} />
      </Grid>
      <Divider mb={4} />
    </>
  )
}

export default ItemCart