import type { IntertypeGroupIdType } from "@types";
import { INTERTYPE_GROUPS } from "../../config";

const getIntertypeGroupName = (groupId: IntertypeGroupIdType) => {
  return INTERTYPE_GROUPS[groupId];
};

export default getIntertypeGroupName;
