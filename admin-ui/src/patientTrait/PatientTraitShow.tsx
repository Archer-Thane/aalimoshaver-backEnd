import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const PatientTraitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Patient Id"
          source="patient.id"
          reference="Patient"
        >
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Severity" source="severity" />
        <TextField label="Trait Type" source="traitType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
