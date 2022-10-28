import { Session } from "../session/Session";
import { Tax } from "../tax/Tax";

export type Payment = {
  cost: number | null;
  createdAt: Date;
  desc: string | null;
  id: string;
  paymentType?: Array<"Cash" | "Card" | "CardToCard" | "Unpaid">;
  sessionId?: Session | null;
  sessions?: Array<Session>;
  status?: "PaidOff" | "Unpaid" | null;
  taxId?: Tax | null;
  updatedAt: Date;
};
