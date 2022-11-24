import { Module } from "@nestjs/common";
import { PsychotherapistModuleBase } from "./base/psychotherapist.module.base";
import { PsychotherapistService } from "./psychotherapist.service";
import { PsychotherapistController } from "./psychotherapist.controller";
import { PsychotherapistResolver } from "./psychotherapist.resolver";

@Module({
  imports: [PsychotherapistModuleBase],
  controllers: [PsychotherapistController],
  providers: [PsychotherapistService, PsychotherapistResolver],
  exports: [PsychotherapistService],
})
export class PsychotherapistModule {}
