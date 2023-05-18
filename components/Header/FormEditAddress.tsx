import { Stack, ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";
import { User } from "../../products/typeUser";
import { useFoodTruck } from "../useFoodTruck";
interface Props {
  onCancel: VoidFunction;
  children: React.ReactNode;
  inputAddressEditedValue: User["address"];
  setLocalUser: any;
  localUser: any;
}

const FormEditAddress: React.FC<Props> = ({
  onCancel,
  children,
  inputAddressEditedValue,
  setLocalUser,
  localUser,
}) => {
  const { setTextAddress } = useFoodTruck();
  const onSave = () => {
    setLocalUser({ ...localUser, address: inputAddressEditedValue });
    setTextAddress(inputAddressEditedValue);
    onCancel();
  };
  return (
    <>
      <Stack spacing={4}>
        {children}
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={onSave}>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default FormEditAddress;
