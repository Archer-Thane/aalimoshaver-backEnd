import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatientGroupUpdateInput = {
  groupType?:
    | "Family"
    | "Wife"
    | "Husband"
    | "Child"
    | "Engaged"
    | "GroupTherapy"
    | null;
  patientId?: PatientWhereUniqueInput | null;
};
