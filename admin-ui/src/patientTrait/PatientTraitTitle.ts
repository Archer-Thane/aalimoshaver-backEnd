import { PatientTrait as TPatientTrait } from "../api/patientTrait/PatientTrait";

export const PATIENTTRAIT_TITLE_FIELD = "name";

export const PatientTraitTitle = (record: TPatientTrait): string => {
  return record.name || record.id;
};
