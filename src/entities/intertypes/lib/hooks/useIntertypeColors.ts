import type { MaybeRefOrGetter } from "vue";
import type { IntertypeGroupIdType } from "@types";

import createColorIntertypeGroupStyle from "../createColorIntertypeGroupStyle";
import createBgColorIntertypeGroupStyles from "../createBgColorIntertypeGroupStyle";

const useIntertypeColors = (
  intertypeGroupName: MaybeRefOrGetter<IntertypeGroupIdType>,
) => {
  return computed(() => ({
    ...createColorIntertypeGroupStyle(toValue(intertypeGroupName)),
    ...createBgColorIntertypeGroupStyles(toValue(intertypeGroupName)),
  }));
};

export default useIntertypeColors;
