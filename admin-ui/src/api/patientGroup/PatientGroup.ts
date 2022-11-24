import { Patient } from "../patient/Patient";

export type PatientGroup = {
  createdAt: Date;
  groupType?:
    | "Family"
    | "Wife"
    | "Husband"
    | "Child"
    | "Engaged"
    | "GroupTherapy"
    | null;
  id: string;
  patientId?: Patient | null;
  updatedAt: Date;
};
