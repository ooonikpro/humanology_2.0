const isAllAnswered = <T>(answers: T[]): answers is NonNullable<T>[] => {
  return answers.every((answer) => !!answer);
};

export default isAllAnswered;
