import { Patient } from "../patient/Patient";

export type Questionaire = {
  attendDate: Date | null;
  createdAt: Date;
  id: string;
  name: string | null;
  patientId?: Patient | null;
  resultId: string | null;
  updatedAt: Date;
};
