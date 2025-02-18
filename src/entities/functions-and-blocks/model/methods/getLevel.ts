import type { HumanFunction } from "@types";
import { FUNCTIONS } from "../../config";

const getLevel = (functionName: HumanFunction) => {
  return FUNCTIONS[functionName].lvl;
};

export default getLevel;
