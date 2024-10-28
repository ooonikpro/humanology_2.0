import type { SociotypeDataType, SociotypeIdType } from "@types";
import { SOCIOTYPES } from "../../config";

const getSociotypeBy = (id: SociotypeIdType): SociotypeDataType => {
  return SOCIOTYPES[id];
};

export default getSociotypeBy;
