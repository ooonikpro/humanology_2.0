const normalizeTestRouteParam = <T extends string>(
  testParam: T,
): Uppercase<T> => {
  return testParam.replaceAll("-", "_").toUpperCase() as Uppercase<T>;
};

export default normalizeTestRouteParam;
