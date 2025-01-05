import type { SociotypeIdType } from "@types";
import { SOCIOTYPES } from "@entities/sociotypes";

const isSociotypeId = (id: string | SociotypeIdType): id is SociotypeIdType => {
  return SOCIOTYPES.hasOwnProperty(id);
};

export default isSociotypeId;
