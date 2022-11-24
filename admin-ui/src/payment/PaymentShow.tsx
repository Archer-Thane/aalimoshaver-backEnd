import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { PAYMENT_TITLE_FIELD } from "./PaymentTitle";
import { PSYCHOTHERAPIST_TITLE_FIELD } from "../psychotherapist/PsychotherapistTitle";
import { PSYCHOSCHEDULE_TITLE_FIELD } from "../psychoSchedule/PsychoScheduleTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { TAX_TITLE_FIELD } from "../tax/TaxTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Desc" source="desc" />
        <TextField label="ID" source="id" />
        <TextField label="Payment Type" source="paymentType" />
        <ReferenceField
          label="Session Id"
          source="session.id"
          reference="Session"
        >
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <ReferenceField label="Tax Id" source="tax.id" reference="Tax">
          <TextField source={TAX_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Session"
          target="PaymentId"
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
