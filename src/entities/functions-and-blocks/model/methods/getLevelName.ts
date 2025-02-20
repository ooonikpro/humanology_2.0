import type { HumanFunctionType } from "@types";
import { FUNCTION_LVL_NAME } from "../../config";
import getLevel from "./getLevel";

const getLevelName = (functionName: HumanFunctionType) => {
  return FUNCTION_LVL_NAME[getLevel(functionName)];
};

export default getLevelName;
