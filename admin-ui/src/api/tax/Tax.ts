import { Payment } from "../payment/Payment";

export type Tax = {
  amount: number | null;
  createdAt: Date;
  id: string;
  payments?: Array<Payment>;
  status?: "Unpaid" | "Paid" | null;
  updatedAt: Date;
};
