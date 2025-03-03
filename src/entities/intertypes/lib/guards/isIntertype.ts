import type { IntertypeIdType } from "@types";
import { INTERTYPES } from "../../config";

const isIntertype = (
  intertype: string | IntertypeIdType,
): intertype is IntertypeIdType => {
  return INTERTYPES.hasOwnProperty(intertype);
};

export default isIntertype;
