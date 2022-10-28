import { CheckoutPaymentUpdateManyWithoutPsychotherapistsInput } from "./CheckoutPaymentUpdateManyWithoutPsychotherapistsInput";
import { PatientUpdateManyWithoutPsychotherapistsInput } from "./PatientUpdateManyWithoutPsychotherapistsInput";
import { PsychoScheduleUpdateManyWithoutPsychotherapistsInput } from "./PsychoScheduleUpdateManyWithoutPsychotherapistsInput";
import { SessionUpdateManyWithoutPsychotherapistsInput } from "./SessionUpdateManyWithoutPsychotherapistsInput";
import { WaitingListUpdateManyWithoutPsychotherapistsInput } from "./WaitingListUpdateManyWithoutPsychotherapistsInput";

export type PsychotherapistUpdateInput = {
  cardNumber?: string | null;
  checkoutPayments?: CheckoutPaymentUpdateManyWithoutPsychotherapistsInput;
  firstName?: string | null;
  lastName?: string | null;
  patients?: PatientUpdateManyWithoutPsychotherapistsInput;
  phoneNumber?: string | null;
  pricePerHour?: number | null;
  psychoSchedules?: PsychoScheduleUpdateManyWithoutPsychotherapistsInput;
  sessions?: SessionUpdateManyWithoutPsychotherapistsInput;
  shabaNumber?: string | null;
  totalSessionsCount?: number | null;
  totalSessionsLength?: number | null;
  waitingLists?: WaitingListUpdateManyWithoutPsychotherapistsInput;
};
