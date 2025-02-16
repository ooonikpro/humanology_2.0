import { INTERTYPE_RELATIONS } from "@entities/sociotypes/config/intertypeRelations";
import type { IntertypeRelations } from "@types";

const getRelationData = (intertypeId: IntertypeRelations) => {
  return INTERTYPE_RELATIONS[intertypeId];
};

export default getRelationData;
