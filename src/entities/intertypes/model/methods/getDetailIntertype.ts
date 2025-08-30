import type { IntertypeIdType } from "@types";
import getAllDetailIntertypes from "./getAllDetailIntertypes";

const getDetailIntertype = (intertypeId: IntertypeIdType | string) => {
  return getAllDetailIntertypes().find(({ intertype }) => {
    return intertype === intertypeId;
  });
};

export default getDetailIntertype;
