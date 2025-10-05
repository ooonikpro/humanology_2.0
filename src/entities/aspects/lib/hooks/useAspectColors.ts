import type { AspectType } from "@types";
import createBgColorAspectStyle from "../createBgColorAspectStyle";
import createColorAspectStyle from "../createColorAspectStyle";

const useAspectColor = (aspect: MaybeRefOrGetter<AspectType>) => {
  const aspectValue = toRef(aspect);

  return computed(() => ({
    ...createBgColorAspectStyle(aspectValue.value),
    ...createColorAspectStyle(aspectValue.value),
  }));
};

export default useAspectColor;
