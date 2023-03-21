import { FormControl, FormLabel, Heading, Input, Button, Grid, Stack } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Props { }

const Login: React.FC<Props> = () => {
  const [address, setAddress] = React.useState<string>('')
  const router = useRouter()

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/main?address=${encodeURIComponent(address)}`)
  }
  return (
    <Stack maxW='800px' m='0 auto' backgroundColor='gray.100'>
      <Head>
        <title>Log in</title>
      </Head>
      <Grid placeContent='center' justifyItems='center' h='100vh'>
        <Heading as='h1'>Log in</Heading>
        <FormControl isRequired mt={8} >
          <FormLabel htmlFor='username'>Username</FormLabel>
          <Input id='username' placeholder='' isRequired autoFocus />
          <FormLabel htmlFor='address'>Address</FormLabel>
          <Input id='address' placeholder='' value={address} onChange={e=>setAddress(e.target.value)}/>
          <Button type='submit' colorScheme='teal' m='32px auto 0' display='block' onClick={onSubmit} >
            Send
          </Button>
        </FormControl>
      </Grid>
    </Stack>
  )
}

export default Login