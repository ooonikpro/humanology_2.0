import { computed, type ComputedRef, type Ref, toValue } from "vue";
import type { QuadrasType, RoleType } from "@types";

import createColorQuadraStyle from "../createColorQuadraStyle";
import createBgColorQuadraStyle from "../createBgColorQuadraStyle";
import createColorRoleStyle from "../createColorRoleStyle";

const useSociotypeColors = ({
  quadra,
  role,
}: {
  quadra: ComputedRef<QuadrasType> | Ref<QuadrasType>;
  role?: ComputedRef<RoleType> | Ref<RoleType>;
}) => {
  return computed(() => {
    return {
      ...createColorQuadraStyle(toValue(quadra)),
      ...createBgColorQuadraStyle(toValue(quadra)),
      ...(role ? createColorRoleStyle(toValue(role)) : {}),
    };
  });
};

export default useSociotypeColors;
