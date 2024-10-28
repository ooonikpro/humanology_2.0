import type { QuadrasType, RoleType } from "@types";
import { computed, type ComputedRef, type Ref, toValue } from "vue";
import model from "../../model";

const useSociotypeColors = ({
  quadra,
  role,
}: {
  quadra: ComputedRef<QuadrasType> | Ref<QuadrasType>;
  role?: ComputedRef<RoleType> | Ref<RoleType>;
}) => {
  return computed(() => {
    return {
      ...model.createColorQuadraStyle(toValue(quadra)),
      ...model.createBgColorQuadraStyle(toValue(quadra)),
      ...(role ? model.createColorRoleStyle(toValue(role)) : {}),
    };
  });
};

export default useSociotypeColors;
