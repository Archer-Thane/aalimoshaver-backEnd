import { Module } from "@nestjs/common";
import { QuestionaireModuleBase } from "./base/questionaire.module.base";
import { QuestionaireService } from "./questionaire.service";
import { QuestionaireController } from "./questionaire.controller";
import { QuestionaireResolver } from "./questionaire.resolver";

@Module({
  imports: [QuestionaireModuleBase],
  controllers: [QuestionaireController],
  providers: [QuestionaireService, QuestionaireResolver],
  exports: [QuestionaireService],
})
export class QuestionaireModule {}
