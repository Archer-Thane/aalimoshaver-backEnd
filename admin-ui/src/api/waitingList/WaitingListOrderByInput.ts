import { SortOrder } from "../../util/SortOrder";

export type WaitingListOrderByInput = {
  callCounts?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isEmergency?: SortOrder;
  isFirstSession?: SortOrder;
  lastRequestTime?: SortOrder;
  patientId?: SortOrder;
  priority?: SortOrder;
  psychoIdId?: SortOrder;
  updatedAt?: SortOrder;
};
