import type { HumanFunctionType, SociotypeIdType } from "@types";
import getFunctions from "./getFunctions";

const getAspectByFunction = (
  id: SociotypeIdType,
  functionName: HumanFunctionType,
) => {
  return getFunctions(id)[functionName].aspect;
};

export default getAspectByFunction;
