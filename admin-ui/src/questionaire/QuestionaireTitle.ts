import { Questionaire as TQuestionaire } from "../api/questionaire/Questionaire";

export const QUESTIONAIRE_TITLE_FIELD = "name";

export const QuestionaireTitle = (record: TQuestionaire): string => {
  return record.name || record.id;
};
