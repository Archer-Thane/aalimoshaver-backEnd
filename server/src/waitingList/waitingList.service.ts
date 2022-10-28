import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WaitingListServiceBase } from "./base/waitingList.service.base";

@Injectable()
export class WaitingListService extends WaitingListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
