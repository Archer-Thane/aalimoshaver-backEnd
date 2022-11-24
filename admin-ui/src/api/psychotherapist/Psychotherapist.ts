import { CheckoutPayment } from "../checkoutPayment/CheckoutPayment";
import { Patient } from "../patient/Patient";
import { PsychoSchedule } from "../psychoSchedule/PsychoSchedule";
import { Session } from "../session/Session";
import { WaitingList } from "../waitingList/WaitingList";

export type Psychotherapist = {
  cardNumber: string | null;
  checkoutPayments?: Array<CheckoutPayment>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  patients?: Array<Patient>;
  phoneNumber: string | null;
  pricePerHour: number | null;
  psychoSchedules?: Array<PsychoSchedule>;
  sessions?: Array<Session>;
  shabaNumber: string | null;
  totalSessionsCount: number | null;
  totalSessionsLength: number | null;
  updatedAt: Date;
  waitingLists?: Array<WaitingList>;
};
