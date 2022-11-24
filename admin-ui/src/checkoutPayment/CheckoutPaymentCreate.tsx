import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { PsychotherapistTitle } from "../psychotherapist/PsychotherapistTitle";

export const CheckoutPaymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <NumberInput step={1} label="Month" source="month" />
        <ReferenceInput
          source="psychotherapist.id"
          reference="Psychotherapist"
          label="Psycho Id"
        >
          <SelectInput optionText={PsychotherapistTitle} />
        </ReferenceInput>
        <DateTimeInput label="Reslove Date" source="resloveDate" />
        <BooleanInput label="Resolved" source="resolved" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
