import { Psychotherapist } from "../psychotherapist/Psychotherapist";
import { Session } from "../session/Session";

export type PsychoSchedule = {
  beginTime: Date | null;
  createdAt: Date;
  day: string | null;
  endTime: Date | null;
  id: string;
  psychoId?: Psychotherapist | null;
  sessions?: Array<Session>;
  updatedAt: Date;
};
