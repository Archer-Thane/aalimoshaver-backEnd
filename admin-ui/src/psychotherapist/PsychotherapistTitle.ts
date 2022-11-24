import { Psychotherapist as TPsychotherapist } from "../api/psychotherapist/Psychotherapist";

export const PSYCHOTHERAPIST_TITLE_FIELD = "firstName";

export const PsychotherapistTitle = (record: TPsychotherapist): string => {
  return record.firstName || record.id;
};
