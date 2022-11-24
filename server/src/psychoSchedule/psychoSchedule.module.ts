import { Module } from "@nestjs/common";
import { PsychoScheduleModuleBase } from "./base/psychoSchedule.module.base";
import { PsychoScheduleService } from "./psychoSchedule.service";
import { PsychoScheduleController } from "./psychoSchedule.controller";
import { PsychoScheduleResolver } from "./psychoSchedule.resolver";

@Module({
  imports: [PsychoScheduleModuleBase],
  controllers: [PsychoScheduleController],
  providers: [PsychoScheduleService, PsychoScheduleResolver],
  exports: [PsychoScheduleService],
})
export class PsychoScheduleModule {}
