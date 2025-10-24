import type { DichotomyType, TestType } from "@types";
import isTest from "../guards/isTest";
import normalizeTestRouteParam from "../normalizeTestRouteParam";
import { sociotypeModel } from "@entities/sociotypes";

type TestNameType = keyof ReturnType<typeof sociotypeModel.getAllTests>;
function useQuestions(inputTest?: MaybeRefOrGetter<string | TestNameType>) {
  const currentTest = computed(() => {
    const maybeTest = toValue(inputTest);
    const isTestParam = typeof maybeTest === "string" && isTest(maybeTest);

    return isTestParam ? normalizeTestRouteParam(maybeTest) : null;
  });

  const questions = computed<TestType<DichotomyType>[] | null>(() => {
    return currentTest.value && sociotypeModel.getAllTests()[currentTest.value];
  });

  return {
    questions,
  };
}

export default useQuestions;
