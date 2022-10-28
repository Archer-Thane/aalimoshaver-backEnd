import { Session } from "../session/Session";

export type Report = {
  createdAt: Date;
  desc: string | null;
  id: string;
  sessionNumber: number | null;
  sessions?: Array<Session>;
  title: string | null;
  updatedAt: Date;
};
