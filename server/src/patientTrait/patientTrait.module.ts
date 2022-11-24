import { Module } from "@nestjs/common";
import { PatientTraitModuleBase } from "./base/patientTrait.module.base";
import { PatientTraitService } from "./patientTrait.service";
import { PatientTraitController } from "./patientTrait.controller";
import { PatientTraitResolver } from "./patientTrait.resolver";

@Module({
  imports: [PatientTraitModuleBase],
  controllers: [PatientTraitController],
  providers: [PatientTraitService, PatientTraitResolver],
  exports: [PatientTraitService],
})
export class PatientTraitModule {}
