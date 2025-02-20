import type { HumanFunctionType, SociotypeIdType } from "@types";
import getFunctions from "./getFunctions";

const getAspectVariantByFunction = (
  id: SociotypeIdType,
  functionName: HumanFunctionType,
) => {
  return getFunctions(id)[functionName].variant;
};

export default getAspectVariantByFunction;
