import { VStack, Heading, Box, Flex, Image, Icon, Divider, HStack } from "@chakra-ui/react"
import React from "react";
import { BiMap, BiUser } from 'react-icons/bi'

interface Props {
  children: any
  address: any
}

const Header: React.FC<Props> = ({ children, address }) => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
       {children}
        <Icon as={BiUser} boxSize={7} />
      </Flex>
      <VStack align="flex-start">
        <Heading as="h1" mt={2}>
          Food Truck Delivery
        </Heading>
        <HStack align='center'>
          <Icon as={BiMap} />
          <Heading as="h2" mt={0} size="md">
            {address}
          </Heading>
        </HStack>
      </VStack>
      <Divider marginY={6} />
    </Box>
  )
}
export default Header