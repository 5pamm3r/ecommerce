import { VStack, Heading, Box, Flex, Image, IconButton, Divider } from "@chakra-ui/react"
import { DragHandleIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <Box>
      <Flex justify="space-between" align="center">
        <IconButton
          aria-label="settings"
          fontSize="md"
          size="sm"
          icon={<DragHandleIcon />}
        />
        <Image
          borderRadius={9999}
          src="//placehold.it/40x40"
          align="flex-end"
        />
      </Flex>
      <VStack align="flex-start">
        <Heading as="h1" mt={2}>
          Food Truck Delivery
        </Heading>
        <Heading as="h2" mt={0} size="md">
          In less than 20 min
        </Heading>
      </VStack>
      <Divider marginY={6} />
    </Box>
  )
}
export default Header