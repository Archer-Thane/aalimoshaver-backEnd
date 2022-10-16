import { TestWhereUniqueInput } from "./TestWhereUniqueInput";
import { TestUpdateManyWithoutTestsInput } from "./TestUpdateManyWithoutTestsInput";

export type TestUpdateInput = {
  test?: TestWhereUniqueInput | null;
  tests?: TestUpdateManyWithoutTestsInput;
};
