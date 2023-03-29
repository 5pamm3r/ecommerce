import { Stack, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
  onCancel: VoidFunction
  children: React.ReactNode
  setUserAddress: (value: string) => void
  inputAddressEditedValue: string

}

const FormEditAddress: React.FC<Props> = ({ onCancel, children, setUserAddress, inputAddressEditedValue }) => {
  const onSave = () => {
    setUserAddress(inputAddressEditedValue)
    onCancel()
  }
  return (
    <div>
      <Stack spacing={4}>
        {children}
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme='teal' onClick={onSave}>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    </div>
  )
}

export default FormEditAddress
