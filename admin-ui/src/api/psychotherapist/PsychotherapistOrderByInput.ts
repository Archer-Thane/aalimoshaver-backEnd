import { SortOrder } from "../../util/SortOrder";

export type PsychotherapistOrderByInput = {
  cardNumber?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  pricePerHour?: SortOrder;
  shabaNumber?: SortOrder;
  totalSessionsCount?: SortOrder;
  totalSessionsLength?: SortOrder;
  updatedAt?: SortOrder;
};
