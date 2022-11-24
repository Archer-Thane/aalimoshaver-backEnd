import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { QuestionaireResolverBase } from "./base/questionaire.resolver.base";
import { Questionaire } from "./base/Questionaire";
import { QuestionaireService } from "./questionaire.service";

@graphql.Resolver(() => Questionaire)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class QuestionaireResolver extends QuestionaireResolverBase {
  constructor(
    protected readonly service: QuestionaireService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
