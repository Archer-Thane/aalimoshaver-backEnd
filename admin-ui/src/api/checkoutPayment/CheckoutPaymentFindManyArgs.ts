import { CheckoutPaymentWhereInput } from "./CheckoutPaymentWhereInput";
import { CheckoutPaymentOrderByInput } from "./CheckoutPaymentOrderByInput";

export type CheckoutPaymentFindManyArgs = {
  where?: CheckoutPaymentWhereInput;
  orderBy?: Array<CheckoutPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
