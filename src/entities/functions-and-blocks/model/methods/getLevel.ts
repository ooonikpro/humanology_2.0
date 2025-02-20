import type { HumanFunctionType } from "@types";
import { FUNCTIONS } from "../../config";

const getLevel = (functionName: HumanFunctionType) => {
  return FUNCTIONS[functionName].lvl;
};

export default getLevel;
