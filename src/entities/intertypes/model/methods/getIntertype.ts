import { INTERTYPES } from "../../config";
import type { IntertypeIdType } from "@types";

const getIntertype = (intertypeId: IntertypeIdType) => {
  return INTERTYPES[intertypeId];
};

export default getIntertype;
