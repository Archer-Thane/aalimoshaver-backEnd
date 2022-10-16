/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Psychotherapist } from "@prisma/client";

export class PsychotherapistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PsychotherapistFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsychotherapistFindManyArgs>
  ): Promise<number> {
    return this.prisma.psychotherapist.count(args);
  }

  async findMany<T extends Prisma.PsychotherapistFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsychotherapistFindManyArgs>
  ): Promise<Psychotherapist[]> {
    return this.prisma.psychotherapist.findMany(args);
  }
  async findOne<T extends Prisma.PsychotherapistFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsychotherapistFindUniqueArgs>
  ): Promise<Psychotherapist | null> {
    return this.prisma.psychotherapist.findUnique(args);
  }
  async create<T extends Prisma.PsychotherapistCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsychotherapistCreateArgs>
  ): Promise<Psychotherapist> {
    return this.prisma.psychotherapist.create<T>(args);
  }
  async update<T extends Prisma.PsychotherapistUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsychotherapistUpdateArgs>
  ): Promise<Psychotherapist> {
    return this.prisma.psychotherapist.update<T>(args);
  }
  async delete<T extends Prisma.PsychotherapistDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsychotherapistDeleteArgs>
  ): Promise<Psychotherapist> {
    return this.prisma.psychotherapist.delete(args);
  }
}