import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TestTitle } from "./TestTitle";

export const TestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="test.id" reference="Test" label="test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tests"
          reference="Test"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
