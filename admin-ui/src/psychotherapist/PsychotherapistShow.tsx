import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PsychotherapistShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="card number" source="cardNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="first name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="last name" source="lastName" />
        <TextField label="phone number" source="phoneNumber" />
        <TextField label="price per hour" source="pricePerHour" />
        <TextField label="shaba number" source="shabaNumber" />
        <TextField label="total sessions count" source="totalSessionsCount" />
        <TextField label="total sessions length" source="totalSessionsLength" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
