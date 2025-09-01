import type { sociotypeModel } from "@entities/sociotypes";
import useQuestions from "./useQuestions";
import getTestDataBy from "../../model/getTestDataBy";

type TestNameType = keyof ReturnType<typeof sociotypeModel.getAllTests>;
const useTestConfig = (testParam: MaybeRefOrGetter<TestNameType>) => {
  const { questions } = useQuestions(testParam);

  const questionAmount = computed(() => questions.value?.length || -1);

  const maxPerScalePair = computed(() => {
    if (questionAmount.value === -1) return 0;
    return questionAmount.value / 4 > 10 ? 10 : questionAmount.value / 4;
  });

  const testData = computed(() => getTestDataBy(toValue(testParam)));

  return {
    questions,
    questionAmount,
    maxPerScalePair,
    testData,
  };
};

export default useTestConfig;
