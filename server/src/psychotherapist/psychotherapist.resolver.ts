import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PsychotherapistResolverBase } from "./base/psychotherapist.resolver.base";
import { Psychotherapist } from "./base/Psychotherapist";
import { PsychotherapistService } from "./psychotherapist.service";

@graphql.Resolver(() => Psychotherapist)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PsychotherapistResolver extends PsychotherapistResolverBase {
  constructor(
    protected readonly service: PsychotherapistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
