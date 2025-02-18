import type { BlockNameType } from "@types";
import { BLOCK_WITH_FUNCTIONS } from "../../config";

const getLeftFunctionName = (blockName: BlockNameType) => {
  return BLOCK_WITH_FUNCTIONS[blockName][0];
};

export default getLeftFunctionName;
