import { PsychotherapistWhereInput } from "./PsychotherapistWhereInput";
import { PsychotherapistOrderByInput } from "./PsychotherapistOrderByInput";

export type PsychotherapistFindManyArgs = {
  where?: PsychotherapistWhereInput;
  orderBy?: Array<PsychotherapistOrderByInput>;
  skip?: number;
  take?: number;
};
