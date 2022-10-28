import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";

export type CheckoutPaymentCreateInput = {
  amount?: number | null;
  month?: number | null;
  psychoId?: PsychotherapistWhereUniqueInput | null;
  resloveDate?: Date | null;
  resolved?: boolean | null;
  year?: number | null;
};
