import type { SociotypeIdType } from "@types";
import getSociotypeBy from "./getSociotypeBy";

const getIntertypeRelations = (id: SociotypeIdType) => {
  return getSociotypeBy(id).intertypeRelations;
};

export default getIntertypeRelations;
