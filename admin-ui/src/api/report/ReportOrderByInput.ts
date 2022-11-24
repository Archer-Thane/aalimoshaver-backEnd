import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  desc?: SortOrder;
  id?: SortOrder;
  sessionNumber?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
