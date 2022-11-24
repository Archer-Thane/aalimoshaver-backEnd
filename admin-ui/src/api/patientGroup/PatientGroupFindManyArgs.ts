import { PatientGroupWhereInput } from "./PatientGroupWhereInput";
import { PatientGroupOrderByInput } from "./PatientGroupOrderByInput";

export type PatientGroupFindManyArgs = {
  where?: PatientGroupWhereInput;
  orderBy?: Array<PatientGroupOrderByInput>;
  skip?: number;
  take?: number;
};
