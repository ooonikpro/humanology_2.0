import type { HumanFunctionType } from "@types";
import { FUNCTION_TAGS } from "../../config";

const getTags = (functionName: HumanFunctionType) => {
  return FUNCTION_TAGS[functionName];
};

export default getTags;
