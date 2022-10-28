import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { PaymentUpdateManyWithoutSessionsInput } from "./PaymentUpdateManyWithoutSessionsInput";
import { PsychotherapistWhereUniqueInput } from "../psychotherapist/PsychotherapistWhereUniqueInput";
import { PsychoScheduleWhereUniqueInput } from "../psychoSchedule/PsychoScheduleWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type SessionUpdateInput = {
  attendTime?: Date | null;
  desc?: string | null;
  length?: number | null;
  patientId?: PatientWhereUniqueInput | null;
  payId?: PaymentWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutSessionsInput;
  payStatus?: "UnPaid" | "FullyPaid" | "PartailPaid" | null;
  psychoId?: PsychotherapistWhereUniqueInput | null;
  psychoScheduleId?: PsychoScheduleWhereUniqueInput | null;
  reportId?: ReportWhereUniqueInput | null;
  sessionType?: "Online" | "Offline" | "Mix" | null;
  status?: "Free" | "Reserved" | "FinalChecked" | "InProgress" | "Done" | null;
};
