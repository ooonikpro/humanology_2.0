import type { BlockNameType, HumanFunctionType } from "@types";
import { BLOCK_WITH_FUNCTIONS } from "../../config";

const getBlockName = (functionName: HumanFunctionType) => {
  return Object.keys(BLOCK_WITH_FUNCTIONS).find((key: BlockNameType) =>
    BLOCK_WITH_FUNCTIONS[key].includes(functionName),
  );
};

export default getBlockName;
