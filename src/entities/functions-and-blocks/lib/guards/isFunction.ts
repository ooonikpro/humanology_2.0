import type { HumanFunctionType } from "@types";
import { FUNCTIONS } from "../../config";

const isFunction = (
  functionName: string | HumanFunctionType,
): functionName is HumanFunctionType => {
  return FUNCTIONS.hasOwnProperty(functionName);
};

export default isFunction;
