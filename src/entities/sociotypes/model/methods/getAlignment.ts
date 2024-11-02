import type { Alignment } from "@types";
import { ALIGNMENT } from "@entities/sociotypes/config/alignment";

const getAlignment = (alignment: Alignment) => {
  return ALIGNMENT[alignment];
};

export default getAlignment;
