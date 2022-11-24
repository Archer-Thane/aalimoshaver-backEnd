import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CheckoutPaymentTitle } from "../checkoutPayment/CheckoutPaymentTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { PsychoScheduleTitle } from "../psychoSchedule/PsychoScheduleTitle";
import { SessionTitle } from "../session/SessionTitle";
import { WaitingListTitle } from "../waitingList/WaitingListTitle";

export const PsychotherapistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="card number" source="cardNumber" />
        <ReferenceArrayInput
          source="checkoutPayments"
          reference="CheckoutPayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckoutPaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="patients"
          reference="Patient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PatientTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone Number" source="phoneNumber" />
        <NumberInput step={1} label="Price Per Hour" source="pricePerHour" />
        <ReferenceArrayInput
          source="psychoSchedules"
          reference="PsychoSchedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PsychoScheduleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <TextInput label="shaba number" source="shabaNumber" />
        <NumberInput
          step={1}
          label="Total Sessions Count"
          source="totalSessionsCount"
        />
        <NumberInput
          step={1}
          label="Total sessions length"
          source="totalSessionsLength"
        />
        <ReferenceArrayInput
          source="waitingLists"
          reference="WaitingList"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WaitingListTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
