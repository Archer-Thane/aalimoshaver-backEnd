import { StringFilter } from "../../util/StringFilter";
import { TestWhereUniqueInput } from "./TestWhereUniqueInput";
import { TestListRelationFilter } from "./TestListRelationFilter";

export type TestWhereInput = {
  id?: StringFilter;
  test?: TestWhereUniqueInput;
  tests?: TestListRelationFilter;
};
