import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { QuestionaireServiceBase } from "./base/questionaire.service.base";

@Injectable()
export class QuestionaireService extends QuestionaireServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
