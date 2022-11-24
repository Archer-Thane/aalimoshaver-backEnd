import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PatientGroupResolverBase } from "./base/patientGroup.resolver.base";
import { PatientGroup } from "./base/PatientGroup";
import { PatientGroupService } from "./patientGroup.service";

@graphql.Resolver(() => PatientGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PatientGroupResolver extends PatientGroupResolverBase {
  constructor(
    protected readonly service: PatientGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
