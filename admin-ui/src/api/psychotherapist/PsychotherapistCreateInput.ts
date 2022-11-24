import { CheckoutPaymentCreateNestedManyWithoutPsychotherapistsInput } from "./CheckoutPaymentCreateNestedManyWithoutPsychotherapistsInput";
import { PatientCreateNestedManyWithoutPsychotherapistsInput } from "./PatientCreateNestedManyWithoutPsychotherapistsInput";
import { PsychoScheduleCreateNestedManyWithoutPsychotherapistsInput } from "./PsychoScheduleCreateNestedManyWithoutPsychotherapistsInput";
import { SessionCreateNestedManyWithoutPsychotherapistsInput } from "./SessionCreateNestedManyWithoutPsychotherapistsInput";
import { WaitingListCreateNestedManyWithoutPsychotherapistsInput } from "./WaitingListCreateNestedManyWithoutPsychotherapistsInput";

export type PsychotherapistCreateInput = {
  cardNumber?: string | null;
  checkoutPayments?: CheckoutPaymentCreateNestedManyWithoutPsychotherapistsInput;
  firstName?: string | null;
  lastName?: string | null;
  patients?: PatientCreateNestedManyWithoutPsychotherapistsInput;
  phoneNumber?: string | null;
  pricePerHour?: number | null;
  psychoSchedules?: PsychoScheduleCreateNestedManyWithoutPsychotherapistsInput;
  sessions?: SessionCreateNestedManyWithoutPsychotherapistsInput;
  shabaNumber?: string | null;
  totalSessionsCount?: number | null;
  totalSessionsLength?: number | null;
  waitingLists?: WaitingListCreateNestedManyWithoutPsychotherapistsInput;
};
