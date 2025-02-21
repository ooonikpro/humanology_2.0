import type { IntertypeGroupIdType } from "@types";
import { INTERTYPES_ORDER } from "../../config";

const getIntertypeOrder = (intertypeGroupId: IntertypeGroupIdType) => {
  return INTERTYPES_ORDER[intertypeGroupId];
};

export default getIntertypeOrder;
