import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PatientGroupServiceBase } from "./base/patientGroup.service.base";

@Injectable()
export class PatientGroupService extends PatientGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
