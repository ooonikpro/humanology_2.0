import type { AspectType } from "@types";
import { ASPECTS } from "@entities/aspects/config";
import type { AspectsRoutesTypes } from "../routesTypedMap";
import type { MiddlewareType } from "./types";

const aspectParam = (aspect: AspectType) => {
  if (!ASPECTS.hasOwnProperty(aspect)) {
    return false;
  }

  return aspect;
};

export const aspectsMiddleware: MiddlewareType = (to, from, next) => {
  if (from.name === "aspects.card") {
    const params = from.params as AspectsRoutesTypes["aspects.card"]["params"];
    if (aspectParam(params.aspect)) {
      next();
      return true;
    }
    return false;
  }
};
