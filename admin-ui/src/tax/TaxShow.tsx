import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { TAX_TITLE_FIELD } from "./TaxTitle";

export const TaxShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Payment" target="TaxId" label="payments">
          <Datagrid rowClick="show">
            <TextField label="Cost" source="cost" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Desc" source="desc" />
            <TextField label="ID" source="id" />
            <TextField label="Payment Type" source="paymentType" />
            <ReferenceField
              label="Session Id"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <ReferenceField label="Tax Id" source="tax.id" reference="Tax">
              <TextField source={TAX_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
