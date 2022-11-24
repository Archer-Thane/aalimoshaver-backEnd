import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PatientTraitResolverBase } from "./base/patientTrait.resolver.base";
import { PatientTrait } from "./base/PatientTrait";
import { PatientTraitService } from "./patientTrait.service";

@graphql.Resolver(() => PatientTrait)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PatientTraitResolver extends PatientTraitResolverBase {
  constructor(
    protected readonly service: PatientTraitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
