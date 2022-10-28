import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PsychotherapistTitle } from "../psychotherapist/PsychotherapistTitle";
import { SessionTitle } from "../session/SessionTitle";

export const PsychoScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Begin Time" source="beginTime" />
        <TextInput label="Day" source="day" />
        <DateTimeInput label="End Time" source="endTime" />
        <ReferenceInput
          source="psychotherapist.id"
          reference="Psychotherapist"
          label="Psycho Id"
        >
          <SelectInput optionText={PsychotherapistTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
