import { Psychotherapist } from "../psychotherapist/Psychotherapist";

export type WaitingList = {
  callCounts: number | null;
  createdAt: Date;
  id: string;
  isEmergency: boolean | null;
  isFirstSession: boolean | null;
  lastRequestTime: Date | null;
  patientId: string | null;
  priority: number | null;
  psychoId?: Psychotherapist | null;
  updatedAt: Date;
};
