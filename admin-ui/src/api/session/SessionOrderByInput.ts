import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  attendTime?: SortOrder;
  createdAt?: SortOrder;
  desc?: SortOrder;
  id?: SortOrder;
  length?: SortOrder;
  patientIdId?: SortOrder;
  payIdId?: SortOrder;
  payStatus?: SortOrder;
  psychoIdId?: SortOrder;
  psychoScheduleIdId?: SortOrder;
  reportIdId?: SortOrder;
  sessionType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
