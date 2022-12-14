/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  Patient,
  Psychotherapist,
  PatientGroup,
  PatientTrait,
  Questionaire,
  Session,
} from "@prisma/client";

export class PatientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PatientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientFindManyArgs>
  ): Promise<number> {
    return this.prisma.patient.count(args);
  }

  async findMany<T extends Prisma.PatientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientFindManyArgs>
  ): Promise<Patient[]> {
    return this.prisma.patient.findMany(args);
  }
  async findOne<T extends Prisma.PatientFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientFindUniqueArgs>
  ): Promise<Patient | null> {
    return this.prisma.patient.findUnique(args);
  }
  async create<T extends Prisma.PatientCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientCreateArgs>
  ): Promise<Patient> {
    return this.prisma.patient.create<T>(args);
  }
  async update<T extends Prisma.PatientUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientUpdateArgs>
  ): Promise<Patient> {
    return this.prisma.patient.update<T>(args);
  }
  async delete<T extends Prisma.PatientDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientDeleteArgs>
  ): Promise<Patient> {
    return this.prisma.patient.delete(args);
  }

  async findCurrentPsychoId(
    parentId: string,
    args: Prisma.PsychotherapistFindManyArgs
  ): Promise<Psychotherapist[]> {
    return this.prisma.patient
      .findUnique({
        where: { id: parentId },
      })
      .currentPsychoId(args);
  }

  async findPatientGroups(
    parentId: string,
    args: Prisma.PatientGroupFindManyArgs
  ): Promise<PatientGroup[]> {
    return this.prisma.patient
      .findUnique({
        where: { id: parentId },
      })
      .patientGroups(args);
  }

  async findPatientTraits(
    parentId: string,
    args: Prisma.PatientTraitFindManyArgs
  ): Promise<PatientTrait[]> {
    return this.prisma.patient
      .findUnique({
        where: { id: parentId },
      })
      .patientTraits(args);
  }

  async findQuestionaires(
    parentId: string,
    args: Prisma.QuestionaireFindManyArgs
  ): Promise<Questionaire[]> {
    return this.prisma.patient
      .findUnique({
        where: { id: parentId },
      })
      .questionaires(args);
  }

  async findSessions(
    parentId: string,
    args: Prisma.SessionFindManyArgs
  ): Promise<Session[]> {
    return this.prisma.patient
      .findUnique({
        where: { id: parentId },
      })
      .sessions(args);
  }
}
