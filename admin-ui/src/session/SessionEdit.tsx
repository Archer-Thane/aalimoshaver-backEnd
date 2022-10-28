import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { PsychotherapistTitle } from "../psychotherapist/PsychotherapistTitle";
import { PsychoScheduleTitle } from "../psychoSchedule/PsychoScheduleTitle";
import { ReportTitle } from "../report/ReportTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="attendTime" source="attendTime" />
        <TextInput label="desc" multiline source="desc" />
        <NumberInput step={1} label="length" source="length" />
        <ReferenceInput
          source="patient.id"
          reference="Patient"
          label="patientId"
        >
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceInput source="payment.id" reference="Payment" label="payId">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="payStatus"
          label="payStatus"
          choices={[
            { label: "un paid", value: "UnPaid" },
            { label: "fully paid", value: "FullyPaid" },
            { label: "partail paid", value: "PartailPaid" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="psychotherapist.id"
          reference="Psychotherapist"
          label="psychoId"
        >
          <SelectInput optionText={PsychotherapistTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="psychoschedule.id"
          reference="PsychoSchedule"
          label="psychoScheduleId"
        >
          <SelectInput optionText={PsychoScheduleTitle} />
        </ReferenceInput>
        <ReferenceInput source="report.id" reference="Report" label="reportId">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <SelectInput
          source="sessionType"
          label="sessionType"
          choices={[
            { label: "online", value: "Online" },
            { label: "offline", value: "Offline" },
            { label: "Mix", value: "Mix" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "free", value: "Free" },
            { label: "reserved", value: "Reserved" },
            { label: "final checked", value: "FinalChecked" },
            { label: "in progress", value: "InProgress" },
            { label: "done", value: "Done" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
