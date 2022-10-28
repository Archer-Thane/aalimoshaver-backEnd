import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";
import { SessionCreateNestedManyWithoutPsychoSchedulesInput } from "./SessionCreateNestedManyWithoutPsychoSchedulesInput";

export type PsychoScheduleCreateInput = {
  beginTime?: Date | null;
  day?: string | null;
  endTime?: Date | null;
  psychoId?: PsychotherapistWhereUniqueInput | null;
  sessions?: SessionCreateNestedManyWithoutPsychoSchedulesInput;
};
