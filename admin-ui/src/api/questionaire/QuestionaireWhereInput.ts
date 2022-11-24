import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type QuestionaireWhereInput = {
  attendDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patientId?: PatientWhereUniqueInput;
  resultId?: StringNullableFilter;
};
