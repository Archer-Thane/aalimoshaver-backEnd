import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PSYCHOTHERAPIST_TITLE_FIELD } from "../psychotherapist/PsychotherapistTitle";

export const WaitingListList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Waiting Lists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
