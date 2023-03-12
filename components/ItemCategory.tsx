import { VStack, Image, Text } from "@chakra-ui/react"

type ItemCategoryProps = {
  title: string;
  image: string;
  changeProduct: any;
}

function ItemCategory({ title, image, changeProduct }: ItemCategoryProps) {
  return (
    <>
      <VStack p={4} borderRadius='20px' _hover={{ backgroundColor: 'white' }} onClick={(e)=>changeProduct()}>
          <Image minW='48px' src={image} alt="All menu" />
          <Text fontWeight='bold'>{title}</Text>
      </VStack>
    </>
  )
}

export default ItemCategory