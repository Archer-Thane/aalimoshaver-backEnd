import { PsychotherapistCreateNestedManyWithoutPatientsInput } from "./PsychotherapistCreateNestedManyWithoutPatientsInput";
import { PatientGroupCreateNestedManyWithoutPatientsInput } from "./PatientGroupCreateNestedManyWithoutPatientsInput";
import { PatientTraitCreateNestedManyWithoutPatientsInput } from "./PatientTraitCreateNestedManyWithoutPatientsInput";
import { QuestionaireCreateNestedManyWithoutPatientsInput } from "./QuestionaireCreateNestedManyWithoutPatientsInput";
import { SessionCreateNestedManyWithoutPatientsInput } from "./SessionCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  currentPsychoId?: PsychotherapistCreateNestedManyWithoutPatientsInput;
  desc?: string | null;
  discount?: number | null;
  firstName?: string | null;
  gender?: "Male" | "Female" | "Other" | "NA" | null;
  hasPsychotherapist?: boolean | null;
  lastName?: string | null;
  lastSessionTime?: Date | null;
  patientGroups?: PatientGroupCreateNestedManyWithoutPatientsInput;
  patientTraits?: PatientTraitCreateNestedManyWithoutPatientsInput;
  phoneNumber?: string | null;
  questionaires?: QuestionaireCreateNestedManyWithoutPatientsInput;
  sessions?: SessionCreateNestedManyWithoutPatientsInput;
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
