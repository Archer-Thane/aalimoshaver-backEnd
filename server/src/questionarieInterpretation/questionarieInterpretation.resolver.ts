import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { QuestionarieInterpretationResolverBase } from "./base/questionarieInterpretation.resolver.base";
import { QuestionarieInterpretation } from "./base/QuestionarieInterpretation";
import { QuestionarieInterpretationService } from "./questionarieInterpretation.service";

@graphql.Resolver(() => QuestionarieInterpretation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class QuestionarieInterpretationResolver extends QuestionarieInterpretationResolverBase {
  constructor(
    protected readonly service: QuestionarieInterpretationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
