import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  desc?: SortOrder;
  id?: SortOrder;
  paymentType?: SortOrder;
  sessionIdId?: SortOrder;
  status?: SortOrder;
  taxIdId?: SortOrder;
  updatedAt?: SortOrder;
};
