import { WaitingListWhereInput } from "./WaitingListWhereInput";
import { WaitingListOrderByInput } from "./WaitingListOrderByInput";

export type WaitingListFindManyArgs = {
  where?: WaitingListWhereInput;
  orderBy?: Array<WaitingListOrderByInput>;
  skip?: number;
  take?: number;
};
