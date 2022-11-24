import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  createdAt?: SortOrder;
  desc?: SortOrder;
  discount?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  hasPsychotherapist?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  lastSessionTime?: SortOrder;
  phoneNumber?: SortOrder;
  status?: SortOrder;
  totalSessionsCount?: SortOrder;
  totalSessionsLength?: SortOrder;
  updatedAt?: SortOrder;
};
