import { computed, type MaybeRefOrGetter, toValue } from "vue";
import type { QuadrasType, RoleType } from "@types";

import createColorQuadraStyle from "../createColorQuadraStyle";
import createBgColorQuadraStyle from "../createBgColorQuadraStyle";
import createColorRoleStyle from "../createColorRoleStyle";
import createColorGradientStyle from "@entities/sociotypes/lib/createColorGradientStyle";

const useSociotypeColors = ({
  quadra,
  role,
}: {
  quadra: MaybeRefOrGetter<QuadrasType>;
  role?: MaybeRefOrGetter<RoleType>;
}) => {
  return computed(() => {
    return {
      ...createColorQuadraStyle(toValue(quadra)),
      ...createBgColorQuadraStyle(toValue(quadra)),
      ...(role ? createColorRoleStyle(toValue(role)) : {}),
      ...(role ? createColorGradientStyle(toValue(quadra), toValue(role)) : {}),
    };
  });
};

export default useSociotypeColors;
