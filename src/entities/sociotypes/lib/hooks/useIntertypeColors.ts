import { computed, type MaybeRefOrGetter, toValue } from "vue";
import type { IntertypeRelationsGroupNameType } from "@types";
import createColorIntertypeGroupStyle from "../createColorIntertypeGroupStyle";
import createBgColorIntertypeGroupStyles from "../createBgColorIntertypeGroupStyle";

const useIntertypeColors = (
  intertypeGroupName: MaybeRefOrGetter<IntertypeRelationsGroupNameType>,
) => {
  return computed(() => ({
    ...createColorIntertypeGroupStyle(toValue(intertypeGroupName)),
    ...createBgColorIntertypeGroupStyles(toValue(intertypeGroupName)),
  }));
};

export default useIntertypeColors;
