import { HStack} from '@chakra-ui/react';
import React from 'react';
import { Category } from '../products/typesCategory';

interface Props {
  CATEGORIES: Category[];
  render: (value: Category, index: number, array: Category[]) => React.ReactNode;
}

const NavCategories: React.FC<Props> = ({ CATEGORIES, render }) => {
  return (
    <HStack mt={6} overflowY={'scroll'} whiteSpace={'nowrap'} spacing={4} justify='space-between'>
      { CATEGORIES.map(render) }
    </HStack>
  )
}

export default NavCategories