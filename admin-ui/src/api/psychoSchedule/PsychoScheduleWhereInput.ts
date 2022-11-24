import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type PsychoScheduleWhereInput = {
  beginTime?: DateTimeNullableFilter;
  day?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  psychoId?: PsychotherapistWhereUniqueInput;
  sessions?: SessionListRelationFilter;
};
