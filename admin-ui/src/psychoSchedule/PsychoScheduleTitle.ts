import { PsychoSchedule as TPsychoSchedule } from "../api/psychoSchedule/PsychoSchedule";

export const PSYCHOSCHEDULE_TITLE_FIELD = "day";

export const PsychoScheduleTitle = (record: TPsychoSchedule): string => {
  return record.day || record.id;
};
