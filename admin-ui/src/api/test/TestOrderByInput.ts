import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  testId?: SortOrder;
  updatedAt?: SortOrder;
};
