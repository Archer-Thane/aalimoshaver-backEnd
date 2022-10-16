import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PsychotherapistList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Psychotherapists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
