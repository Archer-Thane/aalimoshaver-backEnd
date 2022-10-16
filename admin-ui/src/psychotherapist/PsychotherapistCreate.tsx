import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PsychotherapistCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="card number" source="cardNumber" />
        <TextInput label="first name" source="firstName" />
        <TextInput label="last name" source="lastName" />
        <TextInput label="phone number" source="phoneNumber" />
        <NumberInput step={1} label="price per hour" source="pricePerHour" />
        <TextInput label="shaba number" source="shabaNumber" />
        <NumberInput
          step={1}
          label="total sessions count"
          source="totalSessionsCount"
        />
        <NumberInput
          step={1}
          label="total sessions length"
          source="totalSessionsLength"
        />
      </SimpleForm>
    </Create>
  );
};
