import { Module } from "@nestjs/common";
import { PatientGroupModuleBase } from "./base/patientGroup.module.base";
import { PatientGroupService } from "./patientGroup.service";
import { PatientGroupController } from "./patientGroup.controller";
import { PatientGroupResolver } from "./patientGroup.resolver";

@Module({
  imports: [PatientGroupModuleBase],
  controllers: [PatientGroupController],
  providers: [PatientGroupService, PatientGroupResolver],
  exports: [PatientGroupService],
})
export class PatientGroupModule {}
