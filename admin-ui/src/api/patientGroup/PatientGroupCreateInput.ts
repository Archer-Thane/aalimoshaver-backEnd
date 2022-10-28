import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatientGroupCreateInput = {
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
