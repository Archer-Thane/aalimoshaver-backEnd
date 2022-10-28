import { Patient } from "../patient/Patient";
import { Payment } from "../payment/Payment";
import { Psychotherapist } from "../psychotherapist/Psychotherapist";
import { PsychoSchedule } from "../psychoSchedule/PsychoSchedule";
import { Report } from "../report/Report";

export type Session = {
  attendTime: Date | null;
  createdAt: Date;
  desc: string | null;
  id: string;
  length: number | null;
  patientId?: Patient | null;
  payId?: Payment | null;
  payments?: Array<Payment>;
  payStatus?: "UnPaid" | "FullyPaid" | "PartailPaid" | null;
  psychoId?: Psychotherapist | null;
  psychoScheduleId?: PsychoSchedule | null;
  reportId?: Report | null;
  sessionType?: "Online" | "Offline" | "Mix" | null;
  status?: "Free" | "Reserved" | "FinalChecked" | "InProgress" | "Done" | null;
  updatedAt: Date;
};
