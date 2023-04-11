import React from 'react'
import { Popover, Box, PopoverTrigger, IconButton, PopoverContent, FocusLock, PopoverArrow, PopoverCloseButton, useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';


interface Props {
  isOpen: boolean
  onOpen: VoidFunction
  onClose: VoidFunction
  firstFieldRef: any
  children: React.ReactNode
}

const PopoverAddress: React.FC<Props> = ({ isOpen, onOpen, onClose, firstFieldRef, children }) => {

  return (
    <Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="top"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
            color='whiteAlpha.800'
            backgroundColor='transparent'
            size="sm"
            aria-label="Edit address"
            _hover={{ backgroundColor: 'gray' }}
            icon={<ChevronDownIcon />}
          />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            {children}
          </FocusLock>
        </PopoverContent>
      </Popover>
    </Box>
  )
}

export default PopoverAddress