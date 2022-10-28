import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type QuestionaireCreateInput = {
  attendDate?: Date | null;
  name?: string | null;
  patientId?: PatientWhereUniqueInput | null;
  resultId?: string | null;
};
