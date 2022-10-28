import { Psychotherapist } from "../psychotherapist/Psychotherapist";

export type CheckoutPayment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  month: number | null;
  psychoId?: Psychotherapist | null;
  resloveDate: Date | null;
  resolved: boolean | null;
  updatedAt: Date;
  year: number | null;
};
