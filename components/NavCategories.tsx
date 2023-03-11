import { HStack, Text, Image, VStack, } from '@chakra-ui/react';
import React from 'react';

function NavCategories() {
  return (
    <HStack mt={6} overflowY={'scroll'} whiteSpace={'nowrap'} spacing={4} justify='space-between'>
      <VStack p={4} borderRadius='20px' _hover={{ backgroundColor: 'white' }}>
        <Image minW='48px' src='https://img.icons8.com/color/48/null/refreshments.png' alt="All menu" />
        <Text fontWeight='bold'>All</Text>
      </VStack>
      <VStack p={4} borderRadius='20px' _hover={{ backgroundColor: 'white' }}>
        <Image minW='48px' src="https://img.icons8.com/doodle/48/null/hamburger.png" alt="Burger" />
        <Text fontWeight='bold'>Burger</Text>
      </VStack>
      <VStack p={4} borderRadius='20px' _hover={{ backgroundColor: 'white' }}>
        <Image minW='48px' src="https://img.icons8.com/emoji/48/null/pizza-emoji.png" alt="Pizza" />
        <Text fontWeight='bold'>Pizza</Text>
      </VStack>
      <VStack p={4} borderRadius='20px' _hover={{ backgroundColor: 'white' }}>
        <Image minW='48px' src='https://img.icons8.com/emoji/48/null/tropical-drink.png' alt="Cocktail" />
        <Text fontWeight='bold'>Cocktail</Text>
      </VStack>
      <VStack p={4} borderRadius='20px' _hover={{ backgroundColor: 'white' }}>
        <Image minW='48px' src='https://img.icons8.com/color/48/null/cake.png' alt="Desserts" />
        <Text fontWeight='bold'>Desserts</Text>
      </VStack>
    </HStack>
  )
}

export default NavCategories