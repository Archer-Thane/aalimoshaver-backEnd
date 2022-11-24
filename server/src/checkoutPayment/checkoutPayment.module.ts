import { Module } from "@nestjs/common";
import { CheckoutPaymentModuleBase } from "./base/checkoutPayment.module.base";
import { CheckoutPaymentService } from "./checkoutPayment.service";
import { CheckoutPaymentController } from "./checkoutPayment.controller";
import { CheckoutPaymentResolver } from "./checkoutPayment.resolver";

@Module({
  imports: [CheckoutPaymentModuleBase],
  controllers: [CheckoutPaymentController],
  providers: [CheckoutPaymentService, CheckoutPaymentResolver],
  exports: [CheckoutPaymentService],
})
export class CheckoutPaymentModule {}
