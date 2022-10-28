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
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Price Per Hour" source="pricePerHour" />
        <TextField label="shaba number" source="shabaNumber" />
        <TextField label="Total Sessions Count" source="totalSessionsCount" />
        <TextField label="Total sessions length" source="totalSessionsLength" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
