import type { HumanFunction, SociotypeIdType } from "@types";
import getFunctions from "./getFunctions";

const getAspectByFunction = (
  id: SociotypeIdType,
  functionName: HumanFunction,
) => {
  return getFunctions(id)[functionName];
};

export default getAspectByFunction;
