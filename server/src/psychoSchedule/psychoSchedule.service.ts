import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PsychoScheduleServiceBase } from "./base/psychoSchedule.service.base";

@Injectable()
export class PsychoScheduleService extends PsychoScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
