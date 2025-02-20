import type { HumanFunctionType } from "@types";
import { FUNCTIONS } from "../../config";

const getName = (functionName: HumanFunctionType) => {
  return FUNCTIONS[functionName].name;
};

export default getName;
