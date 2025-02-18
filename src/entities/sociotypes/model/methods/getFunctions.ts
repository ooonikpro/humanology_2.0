import type { SociotypeIdType } from "@types";

import { SOCIOTYPES } from "../../config";

const getFunctions = (id: SociotypeIdType) => {
  return SOCIOTYPES[id].functions;
};

export default getFunctions;
