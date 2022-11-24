import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PsychoScheduleResolverBase } from "./base/psychoSchedule.resolver.base";
import { PsychoSchedule } from "./base/PsychoSchedule";
import { PsychoScheduleService } from "./psychoSchedule.service";

@graphql.Resolver(() => PsychoSchedule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PsychoScheduleResolver extends PsychoScheduleResolverBase {
  constructor(
    protected readonly service: PsychoScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
