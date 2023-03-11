import {
  Box,
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Container
          backgroundColor="gray.100"
          boxShadow="md"
          maxWidth="container.xl"
          padding={4}
        >
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
