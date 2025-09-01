import { sociotypeModel } from "@entities/sociotypes";
import normalizeTestRouteParam from "../normalizeTestRouteParam";

type TestNameType = keyof ReturnType<typeof sociotypeModel.getAllTests>;

const isTest = (test: string | TestNameType): test is TestNameType => {
  return Object.keys(sociotypeModel.getAllTests()).includes(
    normalizeTestRouteParam(test),
  );
};

export default isTest;
