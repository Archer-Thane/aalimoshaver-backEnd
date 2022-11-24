import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { PsychotherapistTitle } from "../psychotherapist/PsychotherapistTitle";
import { PatientGroupTitle } from "../patientGroup/PatientGroupTitle";
import { PatientTraitTitle } from "../patientTrait/PatientTraitTitle";
import { QuestionaireTitle } from "../questionaire/QuestionaireTitle";
import { SessionTitle } from "../session/SessionTitle";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="currentPsychoId"
          reference="Psychotherapist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PsychotherapistTitle} />
        </ReferenceArrayInput>
        <TextInput label="Desc" multiline source="desc" />
        <NumberInput step={1} label="Discount" source="discount" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "male", value: "Male" },
            { label: "female", value: "Female" },
            { label: "other", value: "Other" },
            { label: "N/A", value: "NA" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="Has Psychotherapist" source="hasPsychotherapist" />
        <TextInput label="Last Name" source="lastName" />
        <DateTimeInput label="Last Session Date" source="lastSessionTime" />
        <ReferenceArrayInput
          source="patientGroups"
          reference="PatientGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PatientGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="patientTraits"
          reference="PatientTrait"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PatientTraitTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="questionaires"
          reference="Questionaire"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionaireTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "has no psychotherapist", value: "HasNoPsychotherapist" },
            { label: "on reserve list", value: "OnReserveList" },
            { label: "inside schedule", value: "InsideSchedule" },
            { label: "has one session", value: "HasOneSession" },
            { label: "has three sessions", value: "HasThreeSessions" },
            { label: "has six sessions", value: "HasSixSessions" },
            { label: "more than six sessions", value: "MoreThanSixSessions" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="Total Sessions Count"
          source="totalSessionsCount"
        />
        <TextInput label="Total Sessions Length" source="totalSessionsLength" />
      </SimpleForm>
    </Edit>
  );
};
