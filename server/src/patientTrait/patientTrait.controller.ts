import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatientTraitService } from "./patientTrait.service";
import { PatientTraitControllerBase } from "./base/patientTrait.controller.base";

@swagger.ApiTags("patientTraits")
@common.Controller("patientTraits")
export class PatientTraitController extends PatientTraitControllerBase {
  constructor(
    protected readonly service: PatientTraitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
