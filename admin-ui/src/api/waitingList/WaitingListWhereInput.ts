import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";

export type WaitingListWhereInput = {
  callCounts?: IntNullableFilter;
  id?: StringFilter;
  isEmergency?: BooleanNullableFilter;
  isFirstSession?: BooleanNullableFilter;
  lastRequestTime?: DateTimeNullableFilter;
  patientId?: StringNullableFilter;
  priority?: IntNullableFilter;
  psychoId?: PsychotherapistWhereUniqueInput;
};
