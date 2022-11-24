import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatientTraitCreateInput = {
  name?: string | null;
  patientId?: PatientWhereUniqueInput | null;
  severity?: number | null;
  traitType?: "Positive" | "Negative" | null;
};
