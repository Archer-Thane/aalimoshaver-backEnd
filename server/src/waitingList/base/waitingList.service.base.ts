/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, WaitingList, Psychotherapist } from "@prisma/client";

export class WaitingListServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WaitingListFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaitingListFindManyArgs>
  ): Promise<number> {
    return this.prisma.waitingList.count(args);
  }

  async findMany<T extends Prisma.WaitingListFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaitingListFindManyArgs>
  ): Promise<WaitingList[]> {
    return this.prisma.waitingList.findMany(args);
  }
  async findOne<T extends Prisma.WaitingListFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaitingListFindUniqueArgs>
  ): Promise<WaitingList | null> {
    return this.prisma.waitingList.findUnique(args);
  }
  async create<T extends Prisma.WaitingListCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaitingListCreateArgs>
  ): Promise<WaitingList> {
    return this.prisma.waitingList.create<T>(args);
  }
  async update<T extends Prisma.WaitingListUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaitingListUpdateArgs>
  ): Promise<WaitingList> {
    return this.prisma.waitingList.update<T>(args);
  }
  async delete<T extends Prisma.WaitingListDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaitingListDeleteArgs>
  ): Promise<WaitingList> {
    return this.prisma.waitingList.delete(args);
  }

  async getPsychoId(parentId: string): Promise<Psychotherapist | null> {
    return this.prisma.waitingList
      .findUnique({
        where: { id: parentId },
      })
      .psychoId();
  }
}
