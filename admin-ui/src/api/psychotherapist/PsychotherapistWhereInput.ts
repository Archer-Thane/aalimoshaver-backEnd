import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PsychotherapistWhereInput = {
  cardNumber?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  pricePerHour?: IntNullableFilter;
  shabaNumber?: StringNullableFilter;
  totalSessionsCount?: IntNullableFilter;
  totalSessionsLength?: IntNullableFilter;
};
