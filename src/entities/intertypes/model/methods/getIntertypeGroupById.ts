import type { IntertypeGroupIdType, IntertypeIdType } from "@types";
import { INTERTYPES_ORDER } from "@entities/intertypes/config";

const getIntertypeGroupById = (intertypeId: IntertypeIdType) => {
  return (Object.keys(INTERTYPES_ORDER) as IntertypeGroupIdType[]).find((key) =>
    INTERTYPES_ORDER[key].includes(intertypeId),
  ) as IntertypeGroupIdType;
};

export default getIntertypeGroupById;
