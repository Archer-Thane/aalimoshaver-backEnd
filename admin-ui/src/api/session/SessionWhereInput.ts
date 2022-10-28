import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";
import { PsychoScheduleWhereUniqueInput } from "../psychoSchedule/PsychoScheduleWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type SessionWhereInput = {
  attendTime?: DateTimeNullableFilter;
  desc?: StringNullableFilter;
  id?: StringFilter;
  length?: IntNullableFilter;
  patientId?: PatientWhereUniqueInput;
  payId?: PaymentWhereUniqueInput;
  payments?: PaymentListRelationFilter;
  payStatus?: "UnPaid" | "FullyPaid" | "PartailPaid";
  psychoId?: PsychotherapistWhereUniqueInput;
  psychoScheduleId?: PsychoScheduleWhereUniqueInput;
  reportId?: ReportWhereUniqueInput;
  sessionType?: "Online" | "Offline" | "Mix";
  status?: "Free" | "Reserved" | "FinalChecked" | "InProgress" | "Done";
};
