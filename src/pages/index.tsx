import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Grid,
  Stack,
  InputLeftElement,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { BiUser, BiMapPin } from "react-icons/bi";
import { useFoodTruck } from "../../components/useFoodTruck";

interface Props { }

const Login: React.FC<Props> = () => {
  const [error, setError] = React.useState<boolean>(false);
  const router = useRouter();
  const { username, setUsername, storedValue, setStoredValue } = useFoodTruck();

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!storedValue || !username) {
      setError(true);
      return;
    }
    setError(false);
    router.push(`/main?id=${storedValue}`);
  };

  return (
    <Stack maxW="800px" m="0 auto" backgroundColor="gray.100">
      <Head>
        <title>Log in</title>
      </Head>
      <Grid placeContent="center" h="100vh">
        <Heading as="h1">Sign in</Heading>
        <FormControl isRequired mt={8}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiUser color="gray" />}
            />
            <Input
              type="text"
              id="username"
              placeholder=""
              required
              autoFocus
              backgroundColor="white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <FormLabel htmlFor="address" mt={2}>
            Address
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiMapPin color="gray" />}
            />
            <Input
              type="text"
              id="address"
              placeholder=""
              value={storedValue}
              backgroundColor="white"
              required
              onChange={(e) => setStoredValue(e.target.value)}
            />
          </InputGroup>
          {!!error && (
            <Text color="red" mt={2}>
              All fields are required.
            </Text>
          )}
          <Button
            type="submit"
            colorScheme="orange"
            w="100%"
            mt={8}
            onClick={onSubmit}
          >
            Send
          </Button>
        </FormControl>
      </Grid>
    </Stack>
  );
};

export default Login;
