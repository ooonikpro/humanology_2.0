import type { TestType } from "@types";

const createAnswers = <T extends string>(
  questions: TestType<T>[],
): (T | null)[] => Array.from({ length: questions.length }, () => null);

export default createAnswers;
