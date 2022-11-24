import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const QuestionaireEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
