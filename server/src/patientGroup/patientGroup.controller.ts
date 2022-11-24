import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatientGroupService } from "./patientGroup.service";
import { PatientGroupControllerBase } from "./base/patientGroup.controller.base";

@swagger.ApiTags("patientGroups")
@common.Controller("patientGroups")
export class PatientGroupController extends PatientGroupControllerBase {
  constructor(
    protected readonly service: PatientGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
