import type { SociotypeIdType } from "@types";
import { SOCIOTYPES } from "@entities/sociotypes/config";

const getBriefDescriptionById = (id: SociotypeIdType) => {
  return SOCIOTYPES[id].shortDesctiption;
};

export default getBriefDescriptionById;
