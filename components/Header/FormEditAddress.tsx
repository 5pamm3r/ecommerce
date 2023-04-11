import { Stack, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
interface Props {
  onCancel: VoidFunction
  children: React.ReactNode
  inputAddressEditedValue: string
  setStoredValue: any
}

const FormEditAddress: React.FC<Props> = ({ onCancel, children, inputAddressEditedValue, setStoredValue }) => {
  const onSave = () => {
    setStoredValue(inputAddressEditedValue)
    onCancel()
  }
  return (
    <>
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
    </>
  )
}

export default FormEditAddress
