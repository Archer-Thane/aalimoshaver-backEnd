import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type QuestionaireUpdateInput = {
  attendDate?: Date | null;
  name?: string | null;
  patientId?: PatientWhereUniqueInput | null;
  resultId?: string | null;
};
