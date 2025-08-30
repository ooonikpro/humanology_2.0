import type { BlockNameType } from "@types";
import getAllDetailBlocks from "./getAllDetailBlocks";

const getDetailBlock = (blockName: BlockNameType | string) => {
  return getAllDetailBlocks().find(({ block }) => block === blockName);
};

export default getDetailBlock;
