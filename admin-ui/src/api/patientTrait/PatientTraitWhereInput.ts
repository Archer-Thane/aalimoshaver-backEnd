import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PatientTraitWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  patientId?: PatientWhereUniqueInput;
  severity?: IntNullableFilter;
  traitType?: "Positive" | "Negative";
};
