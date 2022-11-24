import { PatientTraitWhereInput } from "./PatientTraitWhereInput";
import { PatientTraitOrderByInput } from "./PatientTraitOrderByInput";

export type PatientTraitFindManyArgs = {
  where?: PatientTraitWhereInput;
  orderBy?: Array<PatientTraitOrderByInput>;
  skip?: number;
  take?: number;
};
