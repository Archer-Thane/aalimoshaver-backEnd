import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PsychotherapistTitle } from "../psychotherapist/PsychotherapistTitle";

export const WaitingListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="callCounts" source="callCounts" />
        <BooleanInput label="isEmergency" source="isEmergency" />
        <BooleanInput label="isFirstSession" source="isFirstSession" />
        <DateTimeInput label="lastRequestTime" source="lastRequestTime" />
        <TextInput label="patientId" source="patientId" />
        <NumberInput step={1} label="priority" source="priority" />
        <ReferenceInput
          source="psychotherapist.id"
          reference="Psychotherapist"
          label="psychoId"
        >
          <SelectInput optionText={PsychotherapistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
