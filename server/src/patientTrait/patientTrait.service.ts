import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PatientTraitServiceBase } from "./base/patientTrait.service.base";

@Injectable()
export class PatientTraitService extends PatientTraitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
