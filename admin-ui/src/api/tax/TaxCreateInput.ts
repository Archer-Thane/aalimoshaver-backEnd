import { PaymentCreateNestedManyWithoutTaxesInput } from "./PaymentCreateNestedManyWithoutTaxesInput";

export type TaxCreateInput = {
  amount?: number | null;
  payments?: PaymentCreateNestedManyWithoutTaxesInput;
  status?: "Unpaid" | "Paid" | null;
};
