import { SortOrder } from "../../util/SortOrder";

export type PatientTraitOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  patientIdId?: SortOrder;
  severity?: SortOrder;
  traitType?: SortOrder;
  updatedAt?: SortOrder;
};
