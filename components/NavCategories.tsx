import { Grid} from '@chakra-ui/react';
import React from 'react';
import { Category } from '../products/typesCategory';

interface Props {
  CATEGORIES: Category[];
  render: (value: Category, index: number, array: Category[]) => React.ReactNode;
}

const NavCategories: React.FC<Props> = ({ CATEGORIES, render }) => {
  return (
    <Grid mt={6} overflowY={'scroll'} whiteSpace={'nowrap'} templateColumns='repeat(5,1fr)' >
      { CATEGORIES.map(render) }
    </Grid>
  )
}

export default NavCategories