import { Button } from '@chakra-ui/react'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  numItems: number;
  setNumItems: (value: number) => void;
}

const ViewMore: React.FC<Props> = ({ numItems, setNumItems }) => {
  const viewMore = () => {
    setNumItems(numItems + 10);
  };

  return (
    <Button mt={2} onClick={viewMore}>
      View More
    </Button>
  )
}

export default ViewMore