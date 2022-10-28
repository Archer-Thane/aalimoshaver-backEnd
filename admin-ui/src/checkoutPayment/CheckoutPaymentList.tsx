import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PSYCHOTHERAPIST_TITLE_FIELD } from "../psychotherapist/PsychotherapistTitle";

export const CheckoutPaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Checkout Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Month" source="month" />
        <ReferenceField
          label="Psycho Id"
          source="psychotherapist.id"
          reference="Psychotherapist"
        >
          <TextField source={PSYCHOTHERAPIST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Reslove Date" source="resloveDate" />
        <BooleanField label="Resolved" source="resolved" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
