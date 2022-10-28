import { QuestionarieInterpretation as TQuestionarieInterpretation } from "../api/questionarieInterpretation/QuestionarieInterpretation";

export const QUESTIONARIEINTERPRETATION_TITLE_FIELD = "id";

export const QuestionarieInterpretationTitle = (
  record: TQuestionarieInterpretation
): string => {
  return record.id || record.id;
};
