import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { QuestionarieInterpretationServiceBase } from "./base/questionarieInterpretation.service.base";

@Injectable()
export class QuestionarieInterpretationService extends QuestionarieInterpretationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
