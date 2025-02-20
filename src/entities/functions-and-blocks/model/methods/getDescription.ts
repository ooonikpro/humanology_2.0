import type { HumanFunctionType } from "@types";
import { FUNCTION_DESCRIPTION } from "../../config";

const getDescription = (functionName: HumanFunctionType) => {
  return FUNCTION_DESCRIPTION[functionName];
};

export default getDescription;
