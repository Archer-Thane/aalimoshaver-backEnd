import { Module } from "@nestjs/common";
import { QuestionarieInterpretationModuleBase } from "./base/questionarieInterpretation.module.base";
import { QuestionarieInterpretationService } from "./questionarieInterpretation.service";
import { QuestionarieInterpretationController } from "./questionarieInterpretation.controller";
import { QuestionarieInterpretationResolver } from "./questionarieInterpretation.resolver";

@Module({
  imports: [QuestionarieInterpretationModuleBase],
  controllers: [QuestionarieInterpretationController],
  providers: [
    QuestionarieInterpretationService,
    QuestionarieInterpretationResolver,
  ],
  exports: [QuestionarieInterpretationService],
})
export class QuestionarieInterpretationModule {}
