import { QuestionaireWhereInput } from "./QuestionaireWhereInput";
import { QuestionaireOrderByInput } from "./QuestionaireOrderByInput";

export type QuestionaireFindManyArgs = {
  where?: QuestionaireWhereInput;
  orderBy?: Array<QuestionaireOrderByInput>;
  skip?: number;
  take?: number;
};
