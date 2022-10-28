import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CheckoutPaymentWhereInput = {
  amount?: IntNullableFilter;
  id?: StringFilter;
  month?: IntNullableFilter;
  psychoId?: PsychotherapistWhereUniqueInput;
  resloveDate?: DateTimeNullableFilter;
  resolved?: BooleanNullableFilter;
  year?: IntNullableFilter;
};
