import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CheckoutPaymentService } from "./checkoutPayment.service";
import { CheckoutPaymentControllerBase } from "./base/checkoutPayment.controller.base";

@swagger.ApiTags("checkoutPayments")
@common.Controller("checkoutPayments")
export class CheckoutPaymentController extends CheckoutPaymentControllerBase {
  constructor(
    protected readonly service: CheckoutPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
