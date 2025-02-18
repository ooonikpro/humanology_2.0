import type { BlockNameType } from "@types";
import { BLOCK_WITH_FUNCTIONS } from "../../config";

const getRightFunctionName = (blockName: BlockNameType) => {
  return BLOCK_WITH_FUNCTIONS[blockName][1];
};

export default getRightFunctionName;
