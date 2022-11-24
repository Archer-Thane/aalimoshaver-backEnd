import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CheckoutPaymentListRelationFilter } from "../checkoutPayment/CheckoutPaymentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PsychoScheduleListRelationFilter } from "../psychoSchedule/PsychoScheduleListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { WaitingListListRelationFilter } from "../waitingList/WaitingListListRelationFilter";

export type PsychotherapistWhereInput = {
  cardNumber?: StringNullableFilter;
  checkoutPayments?: CheckoutPaymentListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  patients?: PatientListRelationFilter;
  phoneNumber?: StringNullableFilter;
  pricePerHour?: IntNullableFilter;
  psychoSchedules?: PsychoScheduleListRelationFilter;
  sessions?: SessionListRelationFilter;
  shabaNumber?: StringNullableFilter;
  totalSessionsCount?: IntNullableFilter;
  totalSessionsLength?: IntNullableFilter;
  waitingLists?: WaitingListListRelationFilter;
};
