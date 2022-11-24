import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PatientTraitUpdateInput = {
  name?: string | null;
  patientId?: PatientWhereUniqueInput | null;
  severity?: number | null;
  traitType?: "Positive" | "Negative" | null;
};
