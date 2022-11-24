import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";
import { SessionUpdateManyWithoutPsychoSchedulesInput } from "./SessionUpdateManyWithoutPsychoSchedulesInput";

export type PsychoScheduleUpdateInput = {
  beginTime?: Date | null;
  day?: string | null;
  endTime?: Date | null;
  psychoId?: PsychotherapistWhereUniqueInput | null;
  sessions?: SessionUpdateManyWithoutPsychoSchedulesInput;
};
