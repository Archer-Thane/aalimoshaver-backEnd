import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { SessionCreateNestedManyWithoutPaymentsInput } from "./SessionCreateNestedManyWithoutPaymentsInput";
import { TaxWhereUniqueInput } from "../tax/TaxWhereUniqueInput";

export type PaymentCreateInput = {
  cost?: number | null;
  desc?: string | null;
  paymentType?: Array<"Cash" | "Card" | "CardToCard" | "Unpaid">;
  sessionId?: SessionWhereUniqueInput | null;
  sessions?: SessionCreateNestedManyWithoutPaymentsInput;
  status?: "PaidOff" | "Unpaid" | null;
  taxId?: TaxWhereUniqueInput | null;
};
