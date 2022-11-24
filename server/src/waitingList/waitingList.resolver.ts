import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WaitingListResolverBase } from "./base/waitingList.resolver.base";
import { WaitingList } from "./base/WaitingList";
import { WaitingListService } from "./waitingList.service";

@graphql.Resolver(() => WaitingList)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WaitingListResolver extends WaitingListResolverBase {
  constructor(
    protected readonly service: WaitingListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
