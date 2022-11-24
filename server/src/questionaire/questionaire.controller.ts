import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestionaireService } from "./questionaire.service";
import { QuestionaireControllerBase } from "./base/questionaire.controller.base";

@swagger.ApiTags("questionaires")
@common.Controller("questionaires")
export class QuestionaireController extends QuestionaireControllerBase {
  constructor(
    protected readonly service: QuestionaireService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
