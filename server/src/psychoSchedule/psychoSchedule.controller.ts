import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PsychoScheduleService } from "./psychoSchedule.service";
import { PsychoScheduleControllerBase } from "./base/psychoSchedule.controller.base";

@swagger.ApiTags("psychoSchedules")
@common.Controller("psychoSchedules")
export class PsychoScheduleController extends PsychoScheduleControllerBase {
  constructor(
    protected readonly service: PsychoScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
