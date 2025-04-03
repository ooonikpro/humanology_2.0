import type { IntertypeIdType } from "@types";
import getIntertype from "./getIntertype";

const getIntertypeLvl = (intertypeId: IntertypeIdType) => {
  const lvl = getIntertype(intertypeId).lvl;
  return +lvl > 0 ? `+${lvl}` : lvl;
};

export default getIntertypeLvl;
