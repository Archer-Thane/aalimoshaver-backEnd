import { Psychotherapist } from "../psychotherapist/Psychotherapist";
import { PatientGroup } from "../patientGroup/PatientGroup";
import { PatientTrait } from "../patientTrait/PatientTrait";
import { Questionaire } from "../questionaire/Questionaire";
import { Session } from "../session/Session";

export type Patient = {
  createdAt: Date;
  currentPsychoId?: Array<Psychotherapist>;
  desc: string | null;
  discount: number | null;
  firstName: string | null;
  gender?: "Male" | "Female" | "Other" | "NA" | null;
  hasPsychotherapist: boolean | null;
  id: string;
  lastName: string | null;
  lastSessionTime: Date | null;
  patientGroups?: Array<PatientGroup>;
  patientTraits?: Array<PatientTrait>;
  phoneNumber: string | null;
  questionaires?: Array<Questionaire>;
  sessions?: Array<Session>;
  status?:
    | "HasNoPsychotherapist"
    | "OnReserveList"
    | "InsideSchedule"
    | "HasOneSession"
    | "HasThreeSessions"
    | "HasSixSessions"
    | "MoreThanSixSessions"
    | null;
  totalSessionsCount: number | null;
  totalSessionsLength: string | null;
  updatedAt: Date;
};
