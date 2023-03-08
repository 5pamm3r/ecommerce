import { Box, ChakraProvider, Container, Divider, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
        <Container backgroundColor='white' boxShadow='md' marginY={4} maxWidth='container.xl' padding={4}>
          <VStack>
            <Image borderRadius={9999} src='//placehold.it/128x128' />
            <Heading>Ecommerce</Heading>
            <Text>Food truck delivery</Text>
          </VStack>
          <Divider marginY={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App