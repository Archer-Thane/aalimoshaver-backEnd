import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";

export type WaitingListUpdateInput = {
  callCounts?: number | null;
  isEmergency?: boolean | null;
  isFirstSession?: boolean | null;
  lastRequestTime?: Date | null;
  patientId?: string | null;
  priority?: number | null;
  psychoId?: PsychotherapistWhereUniqueInput | null;
};
