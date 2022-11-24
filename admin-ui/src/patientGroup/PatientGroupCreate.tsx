import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PatientTitle } from "../patient/PatientTitle";

export const PatientGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="groupType"
          label="Group Type"
          choices={[
            { label: "family", value: "Family" },
            { label: "wife", value: "Wife" },
            { label: "husband", value: "Husband" },
            { label: "child", value: "Child" },
            { label: "engaged", value: "Engaged" },
            { label: "group Therapy", value: "GroupTherapy" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="patient.id"
          reference="Patient"
          label="Patient Id"
        >
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
