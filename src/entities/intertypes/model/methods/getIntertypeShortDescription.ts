import type { IntertypeIdType } from "@types";
import getIntertype from "./getIntertype";

const getIntertypeShortDescription = (intertypeId: IntertypeIdType) => {
  return getIntertype(intertypeId).shortDescription;
};

export default getIntertypeShortDescription;
