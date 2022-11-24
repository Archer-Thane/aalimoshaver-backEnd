import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PSYCHOTHERAPIST_TITLE_FIELD } from "../psychotherapist/PsychotherapistTitle";

export const PsychoScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Psycho Schedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Begin Time" source="beginTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Day" source="day" />
        <TextField label="End Time" source="endTime" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Psycho Id"
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
