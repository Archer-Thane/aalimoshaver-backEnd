import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TaxServiceBase } from "./base/tax.service.base";

@Injectable()
export class TaxService extends TaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
