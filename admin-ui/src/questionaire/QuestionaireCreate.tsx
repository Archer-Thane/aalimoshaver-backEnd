import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const QuestionaireCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Attend Date" source="attendDate" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="patient.id"
          reference="Patient"
          label="Patient Id"
        >
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <TextInput label="Result Id" source="resultId" />
      </SimpleForm>
    </Create>
  );
};
