import type { HumanFunction } from "@types";
import { FUNCTIONS } from "../../config";

const getType = (functionName: HumanFunction) => {
  return FUNCTIONS[functionName].type;
};

export default getType;
