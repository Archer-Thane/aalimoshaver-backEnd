import { TestWhereUniqueInput } from "./TestWhereUniqueInput";
import { TestCreateNestedManyWithoutTestsInput } from "./TestCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  test?: TestWhereUniqueInput | null;
  tests?: TestCreateNestedManyWithoutTestsInput;
};
