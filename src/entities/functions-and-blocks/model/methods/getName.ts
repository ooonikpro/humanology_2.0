import type { HumanFunction } from "@types";
import { FUNCTIONS } from "../../config";

const getName = (functionName: HumanFunction) => {
  return FUNCTIONS[functionName].name;
};

export default getName;
