import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";
import { TaxTitle } from "../tax/TaxTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Cost" source="cost" />
        <TextInput label="Desc" multiline source="desc" />
        <SelectArrayInput
          label="Payment Type"
          source="paymentType"
          choices={[
            { label: "cash", value: "Cash" },
            { label: "card", value: "Card" },
            { label: "card to card", value: "CardToCard" },
            { label: "unpaid", value: "Unpaid" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="session.id"
          reference="Session"
          label="Session Id"
        >
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
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
            { label: "paid off", value: "PaidOff" },
            { label: "unpaid", value: "Unpaid" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="tax.id" reference="Tax" label="Tax Id">
          <SelectInput optionText={TaxTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
