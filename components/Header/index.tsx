import {
  VStack,
  Heading,
  Box,
  Text,
  Icon,
  HStack,
  Highlight,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { BiMap } from "react-icons/bi";
import FormEditAddress from "./FormEditAddress";
import PopoverAddress from "./PopoverAddress";
import TextInput from "./TextInput";
import backgroundImg from '../../src/assets/image/background.jpg'
import { useLocalStorage } from "../useLocalStorage";
import { User } from "../../products/typeUser";

interface Props {
  children: React.ReactNode;
  address: User['address'];
  username: User['name'];
}

const Header: React.FC<Props> = ({
  children,
  address,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);
  const [localUser, setLocalUser] = useLocalStorage('Food-Truck-V1', { user: '', address: '' });
  const [inputAddressEditedValue, setInputAddressEditedValue] =
    React.useState<string>('');
  React.useEffect(() => {
    setInputAddressEditedValue(localUser.address)

  }, [])

  return (
    <Box backgroundImage={backgroundImg.src} backgroundSize='cover' backgroundPosition='bottom' p='8px 16px'>
      <Grid gridTemplateColumns='1fr auto 1fr' mb={2} alignItems='center'>
        {children}
        <HStack>
          <Icon as={BiMap} color='whiteAlpha.800' />
          <Text color='whiteAlpha.800' noOfLines={1} maxW={['100px', '200px', 'fit-content']} >{inputAddressEditedValue}</Text>
          <PopoverAddress
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            firstFieldRef={firstFieldRef}
          >
            <FormEditAddress
              onCancel={onClose}
              inputAddressEditedValue={inputAddressEditedValue}
              setLocalUser={setLocalUser}
              localUser={localUser}
            >
              <TextInput
                label="Edit address"
                id="address"
                ref={firstFieldRef}
                inputAddressEditedValue={inputAddressEditedValue}
                setInputAddressEditedValue={setInputAddressEditedValue}
                address={address}
              />
            </FormEditAddress>
          </PopoverAddress>
        </HStack>
      </Grid>
      <VStack align="flex-start" color='whiteAlpha.800' mb='60px' alignItems='center'>
        <Heading as="h2" size='md' fontFamily='cursive' translate="no">
          What would you
        </Heading>
        <Heading as="h2" size="md" fontFamily='cursive' translate='no'>
          <Highlight query="to eat ?" styles={{ color: "orange.400" }}>
            like to eat ?
          </Highlight>
        </Heading>
      </VStack>
    </Box>
  );
};

export default Header;
