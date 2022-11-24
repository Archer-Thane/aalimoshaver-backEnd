import { Patient } from "../patient/Patient";

export type PatientTrait = {
  createdAt: Date;
  id: string;
  name: string | null;
  patientId?: Patient | null;
  severity: number | null;
  traitType?: "Positive" | "Negative" | null;
  updatedAt: Date;
};
