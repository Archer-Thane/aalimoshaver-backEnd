import { SessionCreateNestedManyWithoutReportsInput } from "./SessionCreateNestedManyWithoutReportsInput";

export type ReportCreateInput = {
  desc?: string | null;
  sessionNumber?: number | null;
  sessions?: SessionCreateNestedManyWithoutReportsInput;
  title?: string | null;
};
