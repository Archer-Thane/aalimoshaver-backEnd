import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatientGroupWhereInput = {
  groupType?:
    | "Family"
    | "Wife"
    | "Husband"
    | "Child"
    | "Engaged"
    | "GroupTherapy";
  id?: StringFilter;
  patientId?: PatientWhereUniqueInput;
};
