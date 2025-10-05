import type { DichotomyType } from "@types";
import createBgColorYungStyle from "../createBgColorYungStyle";
import createColorYungStyle from "../createColorYungStyle";

const useYungColors = (yung: MaybeRefOrGetter<DichotomyType>) => {
  return computed(() => {
    const normalizedYung = toValue(yung);

    return {
      ...createBgColorYungStyle(normalizedYung),
      ...createColorYungStyle(normalizedYung),
    };
  });
};

export default useYungColors;
