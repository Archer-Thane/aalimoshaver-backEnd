import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { PSYCHOTHERAPIST_TITLE_FIELD } from "./PsychotherapistTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { PSYCHOSCHEDULE_TITLE_FIELD } from "../psychoSchedule/PsychoScheduleTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const PsychotherapistShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="card number" source="cardNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Price Per Hour" source="pricePerHour" />
        <TextField label="shaba number" source="shabaNumber" />
        <TextField label="Total Sessions Count" source="totalSessionsCount" />
        <TextField label="Total sessions length" source="totalSessionsLength" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CheckoutPayment"
          target="PsychotherapistId"
          label="Checkout Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Month" source="month" />
            <ReferenceField
              label="Psycho Id"
              source="psychotherapist.id"
              reference="Psychotherapist"
            >
              <TextField source={PSYCHOTHERAPIST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reslove Date" source="resloveDate" />
            <BooleanField label="Resolved" source="resolved" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Year" source="year" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PsychoSchedule"
          target="PsychotherapistId"
          label="Psycho Schedules"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="PsychotherapistId"
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
        <ReferenceManyField
          reference="WaitingList"
          target="PsychotherapistId"
          label="Waiting Lists"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
