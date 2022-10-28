import { SessionUpdateManyWithoutReportsInput } from "./SessionUpdateManyWithoutReportsInput";

export type ReportUpdateInput = {
  desc?: string | null;
  sessionNumber?: number | null;
  sessions?: SessionUpdateManyWithoutReportsInput;
  title?: string | null;
};
