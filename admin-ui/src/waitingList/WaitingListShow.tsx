import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PSYCHOTHERAPIST_TITLE_FIELD } from "../psychotherapist/PsychotherapistTitle";

export const WaitingListShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="callCounts" source="callCounts" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isEmergency" source="isEmergency" />
        <BooleanField label="isFirstSession" source="isFirstSession" />
        <TextField label="lastRequestTime" source="lastRequestTime" />
        <TextField label="patientId" source="patientId" />
        <TextField label="priority" source="priority" />
        <ReferenceField
          label="psychoId"
          source="psychotherapist.id"
          reference="Psychotherapist"
        >
          <TextField source={PSYCHOTHERAPIST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
