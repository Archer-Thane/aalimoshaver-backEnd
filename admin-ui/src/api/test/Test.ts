export type Test = {
  createdAt: Date;
  id: string;
  test?: Test | null;
  tests?: Array<Test>;
  updatedAt: Date;
};
