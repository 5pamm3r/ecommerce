import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const Search: React.FC<Props> = ({ value, setValue }) => {
  return (
    <>
      <InputGroup
        mt="-18px !important"
        ml="auto !important"
        mr="auto !important"
        w="90%"
        backgroundColor="white"
        borderRadius="20px"
      >
        <Input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search products"
            backgroundColor="transparent"
            mr={3}
            size="md"
            h="1.75rem"
            icon={<SearchIcon />}
          ></IconButton>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Search;
