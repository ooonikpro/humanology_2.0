import type { IntertypeIdType } from "@types";
import { INTERTYPES } from "@entities/intertypes/config";
import type { IntertypesRoutesTypes } from "../routesTypedMap";
import type { MiddlewareType } from "./types";

const intertypeParam = (intertype: string) => {
  if (!INTERTYPES.hasOwnProperty(intertype)) {
    return false;
  }

  return intertype as IntertypeIdType;
};

export const intertypesMiddleware: MiddlewareType = (to, from, next) => {
  if (from.name === "intertypes.description") {
    const params =
      from.params as IntertypesRoutesTypes["intertypes.description"]["params"];
    if (intertypeParam(params.intertype)) {
      next();
      return true;
    }
    return false;
  }
};
