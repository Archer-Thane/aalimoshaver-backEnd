import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PATIENT_TITLE_FIELD } from "./PatientTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { PSYCHOTHERAPIST_TITLE_FIELD } from "../psychotherapist/PsychotherapistTitle";
import { PSYCHOSCHEDULE_TITLE_FIELD } from "../psychoSchedule/PsychoScheduleTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Desc" source="desc" />
        <TextField label="Discount" source="discount" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <BooleanField label="Has Psychotherapist" source="hasPsychotherapist" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Last Session Date" source="lastSessionTime" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Status" source="status" />
        <TextField label="Total Sessions Count" source="totalSessionsCount" />
        <TextField label="Total Sessions Length" source="totalSessionsLength" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PatientGroup"
          target="PatientId"
          label="Patient Groups"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Group Type" source="groupType" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patient Id"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PatientTrait"
          target="PatientId"
          label="Patient Traits"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Patient Id"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Severity" source="severity" />
            <TextField label="Trait Type" source="traitType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Questionaire"
          target="PatientId"
          label="Questionaires"
        >
          <Datagrid rowClick="show">
            <TextField label="Attend Date" source="attendDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Patient Id"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Result Id" source="resultId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="PatientId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="attendTime" source="attendTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="desc" source="desc" />
            <TextField label="ID" source="id" />
            <TextField label="length" source="length" />
            <ReferenceField
              label="patientId"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="payId"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="payStatus" source="payStatus" />
            <ReferenceField
              label="psychoId"
              source="psychotherapist.id"
              reference="Psychotherapist"
            >
              <TextField source={PSYCHOTHERAPIST_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="psychoScheduleId"
              source="psychoschedule.id"
              reference="PsychoSchedule"
            >
              <TextField source={PSYCHOSCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="reportId"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sessionType" source="sessionType" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
