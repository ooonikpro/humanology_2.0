import type { IntertypeIdType, SociotypeIdType } from "@types";
import getSociotypeBy from "./getSociotypeBy";

const getIntertypeRelations = (
  id: SociotypeIdType,
  intertypeId: IntertypeIdType,
) => {
  return getSociotypeBy(id).intertypeRelations[intertypeId];
};

export default getIntertypeRelations;
