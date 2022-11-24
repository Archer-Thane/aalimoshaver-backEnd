import { PaymentUpdateManyWithoutTaxesInput } from "./PaymentUpdateManyWithoutTaxesInput";

export type TaxUpdateInput = {
  amount?: number | null;
  payments?: PaymentUpdateManyWithoutTaxesInput;
  status?: "Unpaid" | "Paid" | null;
};
