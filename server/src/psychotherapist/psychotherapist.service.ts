import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PsychotherapistServiceBase } from "./base/psychotherapist.service.base";

@Injectable()
export class PsychotherapistService extends PsychotherapistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
