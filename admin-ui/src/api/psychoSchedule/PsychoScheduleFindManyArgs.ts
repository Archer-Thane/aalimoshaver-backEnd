import { PsychoScheduleWhereInput } from "./PsychoScheduleWhereInput";
import { PsychoScheduleOrderByInput } from "./PsychoScheduleOrderByInput";

export type PsychoScheduleFindManyArgs = {
  where?: PsychoScheduleWhereInput;
  orderBy?: Array<PsychoScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
