import React from 'react'
import { FormControl, FormLabel, Input, InputProps, Text } from '@chakra-ui/react'

interface TextInputProps extends InputProps {
  id: string;
  label: string;
  inputAddressEditedValue: string
  setInputAddressEditedValue: (value: string) => void
  address: string;
}


const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { id, label, inputAddressEditedValue, setInputAddressEditedValue, address, ...inputProps } = props;
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input ref={ref} id={id} value={inputAddressEditedValue} onChange={e => setInputAddressEditedValue(e.target.value)} {...inputProps} />
      {!inputAddressEditedValue && <Text color='red'>Address is required</Text>}
    </FormControl>
  )
})

export default TextInput