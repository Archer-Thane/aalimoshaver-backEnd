import { PatientGroup as TPatientGroup } from "../api/patientGroup/PatientGroup";

export const PATIENTGROUP_TITLE_FIELD = "id";

export const PatientGroupTitle = (record: TPatientGroup): string => {
  return record.id || record.id;
};
