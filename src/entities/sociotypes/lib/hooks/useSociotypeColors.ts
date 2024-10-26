import type { SociotypeDataType } from "@types";
import { computed, type ComputedRef } from "vue";
import model from "../../model";

const useSociotypeColors = (ref: ComputedRef<SociotypeDataType>) => {
  return computed(() => ({
    "--color-quadra": `var(--color-quadra-${ref.value.quadra})`,
    "--color-role": `var(--color-quadra-${model.getRoleQuadra(ref.value.role)})`,
  }));
};

export default useSociotypeColors;
