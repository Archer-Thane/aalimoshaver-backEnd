import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const PatientTraitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="patient.id"
          reference="Patient"
          label="Patient Id"
        >
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Severity" source="severity" />
        <SelectInput
          source="traitType"
          label="Trait Type"
          choices={[
            { label: "positive", value: "Positive" },
            { label: "negative", value: "Negative" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
