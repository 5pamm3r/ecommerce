import {
  VStack,
  Heading,
  Box,
  Flex,
  Text,
  Icon,
  Divider,
  HStack,
  Highlight,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { BiMap, BiUser } from "react-icons/bi";
import FormEditAddress from "./FormEditAddress";
import PopoverAddress from "./PopoverAddress";
import TextInput from "./TextInput";
import backgroundImg from '../../src/assets/image/background.jpg'

interface Props {
  children: React.ReactNode;
  address: any;
  username: any;
  inputAddressEditedValue: any;
  setInputAddressEditedValue: (value: string) => void;
  setUserAddress: any;
}

const Header: React.FC<Props> = ({
  children,
  address,
  username,
  inputAddressEditedValue,
  setInputAddressEditedValue,
  setUserAddress,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);
  return (
    <Box backgroundImage={backgroundImg.src} backgroundSize='cover' backgroundPosition='bottom' p='8px 16px'>
      <Grid gridTemplateColumns='1fr auto 1fr' mb={2} alignItems='center'>
        {children}
        <HStack>
          <Icon as={BiMap} color='whiteAlpha.800' />
          <Text color='whiteAlpha.800'>{address}</Text>
          <PopoverAddress
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            firstFieldRef={firstFieldRef}
            address={address}
          >
            <FormEditAddress
              onCancel={onClose}
              setUserAddress={setUserAddress}
              inputAddressEditedValue={inputAddressEditedValue}
            >
              <TextInput
                label="Edit address"
                id="address"
                ref={firstFieldRef}
                inputAddressEditedValue={inputAddressEditedValue}
                setInputAddressEditedValue={setInputAddressEditedValue}
              />
            </FormEditAddress>
          </PopoverAddress>
        </HStack>
      </Grid>
      <VStack align="flex-start" color='whiteAlpha.800' mb='60px' alignItems='center'>
        <Heading as="h2" size='md' fontFamily='cursive'>
          What would you
        </Heading>
        <Heading as="h2" size="md" fontFamily='cursive'>
          <Highlight query="to eat ?" styles={{ color: "orange.400" }}>
            like to eat ?
          </Highlight>
        </Heading>
      </VStack>
    </Box>
  );
};
export default Header;
