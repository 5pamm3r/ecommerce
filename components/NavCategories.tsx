import { HStack} from '@chakra-ui/react';
import React from 'react';
import { Category } from '../products/typesCategory';

type NavCategoryProps = {
  CATEGORIES: Category[];
  render: any;
}

function NavCategories({ CATEGORIES, render }:NavCategoryProps ){
  return (
    <HStack mt={6} overflowY={'scroll'} whiteSpace={'nowrap'} spacing={4} justify='space-between'>
      { CATEGORIES.map(render) }
    </HStack>
  )
}

export default NavCategories