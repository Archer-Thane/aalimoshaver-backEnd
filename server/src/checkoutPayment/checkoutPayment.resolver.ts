import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CheckoutPaymentResolverBase } from "./base/checkoutPayment.resolver.base";
import { CheckoutPayment } from "./base/CheckoutPayment";
import { CheckoutPaymentService } from "./checkoutPayment.service";

@graphql.Resolver(() => CheckoutPayment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CheckoutPaymentResolver extends CheckoutPaymentResolverBase {
  constructor(
    protected readonly service: CheckoutPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
