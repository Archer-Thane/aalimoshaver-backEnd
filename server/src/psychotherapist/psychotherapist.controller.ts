import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PsychotherapistService } from "./psychotherapist.service";
import { PsychotherapistControllerBase } from "./base/psychotherapist.controller.base";

@swagger.ApiTags("psychotherapists")
@common.Controller("psychotherapists")
export class PsychotherapistController extends PsychotherapistControllerBase {
  constructor(
    protected readonly service: PsychotherapistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
