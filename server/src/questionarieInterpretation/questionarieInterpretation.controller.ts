import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestionarieInterpretationService } from "./questionarieInterpretation.service";
import { QuestionarieInterpretationControllerBase } from "./base/questionarieInterpretation.controller.base";

@swagger.ApiTags("questionarieInterpretations")
@common.Controller("questionarieInterpretations")
export class QuestionarieInterpretationController extends QuestionarieInterpretationControllerBase {
  constructor(
    protected readonly service: QuestionarieInterpretationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
