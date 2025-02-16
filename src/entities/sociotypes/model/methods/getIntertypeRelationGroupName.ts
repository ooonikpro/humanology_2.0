import { INTERTYPE_GROUPS } from "@entities/sociotypes/config/intertypeGroups";
import type { IntertypeRelationsGroupNameType } from "@types";

const getIntertypeRelationGroupName = (
  group: IntertypeRelationsGroupNameType,
) => {
  return INTERTYPE_GROUPS[group];
};

export default getIntertypeRelationGroupName;
