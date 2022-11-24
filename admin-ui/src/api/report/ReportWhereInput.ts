import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type ReportWhereInput = {
  desc?: StringNullableFilter;
  id?: StringFilter;
  sessionNumber?: IntNullableFilter;
  sessions?: SessionListRelationFilter;
  title?: StringNullableFilter;
};
