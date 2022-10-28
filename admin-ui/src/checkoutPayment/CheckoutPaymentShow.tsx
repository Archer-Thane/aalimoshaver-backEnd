import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { PSYCHOTHERAPIST_TITLE_FIELD } from "../psychotherapist/PsychotherapistTitle";

export const CheckoutPaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
