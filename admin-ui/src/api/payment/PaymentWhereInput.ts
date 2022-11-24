import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { TaxWhereUniqueInput } from "../tax/TaxWhereUniqueInput";

export type PaymentWhereInput = {
  cost?: IntNullableFilter;
  desc?: StringNullableFilter;
  id?: StringFilter;
  sessionId?: SessionWhereUniqueInput;
  sessions?: SessionListRelationFilter;
  status?: "PaidOff" | "Unpaid";
  taxId?: TaxWhereUniqueInput;
};
