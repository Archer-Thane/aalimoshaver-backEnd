import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { SessionUpdateManyWithoutPaymentsInput } from "./SessionUpdateManyWithoutPaymentsInput";
import { TaxWhereUniqueInput } from "../tax/TaxWhereUniqueInput";

export type PaymentUpdateInput = {
  cost?: number | null;
  desc?: string | null;
  paymentType?: Array<"Cash" | "Card" | "CardToCard" | "Unpaid">;
  sessionId?: SessionWhereUniqueInput | null;
  sessions?: SessionUpdateManyWithoutPaymentsInput;
  status?: "PaidOff" | "Unpaid" | null;
  taxId?: TaxWhereUniqueInput | null;
};
