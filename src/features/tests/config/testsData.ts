import type { sociotypeModel } from "@entities/sociotypes";
import type { AnswerCardType } from "@types";

type TestNameType = keyof ReturnType<typeof sociotypeModel.getAllTests>;
type CurrentTestConfig<
  T extends string = string,
  A extends AnswerCardType = AnswerCardType,
> = {
  title: string;
  question: T;
  answerCardType: A;
};

function createTestData<T extends AnswerCardType>(
  data: CurrentTestConfig<string, T>,
): CurrentTestConfig<string, T>;
function createTestData<T extends AnswerCardType>(
  data: CurrentTestConfig<"question", T>,
): CurrentTestConfig<"question", T>;
function createTestData<T extends AnswerCardType>({
  title,
  question,
  answerCardType,
}: CurrentTestConfig<string, T>): CurrentTestConfig<string, T> {
  return { title, question, answerCardType } as const;
}

export const TEST_DATA = {
  FILATOVA: createTestData({
    title: "Тест Филатовой",
    question: "question",
    answerCardType: "default",
  }),
  KEIRSEY: createTestData({
    title: "Тест Кейрси",
    question: "question",
    answerCardType: "default",
  }),
  MEGED_OVCHAROVA: createTestData({
    title: "Тест Мегедь-Овчарова",
    question: "Выберите то, что ближе вам:",
    answerCardType: "big-label",
  }),
  VOROBIEV: createTestData({
    title: "Тест Воробьёва",
    question:
      "Выберите одно слово из пары, ориентируясь на первое впечатление.",
    answerCardType: "mini",
  }),
} as const satisfies Record<TestNameType, CurrentTestConfig>;
