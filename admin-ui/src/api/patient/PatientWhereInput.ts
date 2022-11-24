import { PsychotherapistListRelationFilter } from "../psychotherapist/PsychotherapistListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PatientGroupListRelationFilter } from "../patientGroup/PatientGroupListRelationFilter";
import { PatientTraitListRelationFilter } from "../patientTrait/PatientTraitListRelationFilter";
import { QuestionaireListRelationFilter } from "../questionaire/QuestionaireListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type PatientWhereInput = {
  currentPsychoId?: PsychotherapistListRelationFilter;
  desc?: StringNullableFilter;
  discount?: IntNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Male" | "Female" | "Other" | "NA";
  hasPsychotherapist?: BooleanNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  lastSessionTime?: DateTimeNullableFilter;
  patientGroups?: PatientGroupListRelationFilter;
  patientTraits?: PatientTraitListRelationFilter;
  phoneNumber?: StringNullableFilter;
  questionaires?: QuestionaireListRelationFilter;
  sessions?: SessionListRelationFilter;
  status?:
    | "HasNoPsychotherapist"
    | "OnReserveList"
    | "InsideSchedule"
    | "HasOneSession"
    | "HasThreeSessions"
    | "HasSixSessions"
    | "MoreThanSixSessions";
  totalSessionsCount?: IntNullableFilter;
  totalSessionsLength?: StringNullableFilter;
};
