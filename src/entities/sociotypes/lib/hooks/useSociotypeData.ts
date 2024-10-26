import { computed, type ComputedRef } from "vue";
import type { SociotypeDataType, SociotypeIdType } from "@types";

import model from "../../model";

const useSociotypeData = (
  id: SociotypeIdType,
): ComputedRef<SociotypeDataType> => {
  return computed(() => model.getSociotype(id));
};

export default useSociotypeData;
