import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CheckoutPaymentServiceBase } from "./base/checkoutPayment.service.base";

@Injectable()
export class CheckoutPaymentService extends CheckoutPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
