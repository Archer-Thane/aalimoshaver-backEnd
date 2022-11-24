import { PsychotherapistUpdateManyWithoutPatientsInput } from "./PsychotherapistUpdateManyWithoutPatientsInput";
import { PatientGroupUpdateManyWithoutPatientsInput } from "./PatientGroupUpdateManyWithoutPatientsInput";
import { PatientTraitUpdateManyWithoutPatientsInput } from "./PatientTraitUpdateManyWithoutPatientsInput";
import { QuestionaireUpdateManyWithoutPatientsInput } from "./QuestionaireUpdateManyWithoutPatientsInput";
import { SessionUpdateManyWithoutPatientsInput } from "./SessionUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  currentPsychoId?: PsychotherapistUpdateManyWithoutPatientsInput;
  desc?: string | null;
  discount?: number | null;
  firstName?: string | null;
  gender?: "Male" | "Female" | "Other" | "NA" | null;
  hasPsychotherapist?: boolean | null;
  lastName?: string | null;
  lastSessionTime?: Date | null;
  patientGroups?: PatientGroupUpdateManyWithoutPatientsInput;
  patientTraits?: PatientTraitUpdateManyWithoutPatientsInput;
  phoneNumber?: string | null;
  questionaires?: QuestionaireUpdateManyWithoutPatientsInput;
  sessions?: SessionUpdateManyWithoutPatientsInput;
  status?:
    | "HasNoPsychotherapist"
    | "OnReserveList"
    | "InsideSchedule"
    | "HasOneSession"
    | "HasThreeSessions"
    | "HasSixSessions"
    | "MoreThanSixSessions"
    | null;
  totalSessionsCount?: number | null;
  totalSessionsLength?: string | null;
};
