import { CheckoutPayment as TCheckoutPayment } from "../api/checkoutPayment/CheckoutPayment";

export const CHECKOUTPAYMENT_TITLE_FIELD = "id";

export const CheckoutPaymentTitle = (record: TCheckoutPayment): string => {
  return record.id || record.id;
};
