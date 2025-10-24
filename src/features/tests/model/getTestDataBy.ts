import type { sociotypeModel } from "@entities/sociotypes";
import { TEST_DATA } from "../config/testsData";

type TestNameType = keyof ReturnType<typeof sociotypeModel.getAllTests>;
const getTestDataBy = (test: TestNameType) => {
  return TEST_DATA[test];
};

export default getTestDataBy;
