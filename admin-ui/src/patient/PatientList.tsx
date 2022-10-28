import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Desc" source="desc" />
        <TextField label="Discount" source="discount" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <BooleanField label="Has Psychotherapist" source="hasPsychotherapist" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Last Session Date" source="lastSessionTime" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Status" source="status" />
        <TextField label="Total Sessions Count" source="totalSessionsCount" />
        <TextField label="Total Sessions Length" source="totalSessionsLength" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
