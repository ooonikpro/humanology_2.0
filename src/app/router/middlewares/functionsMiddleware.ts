import type { HumanFunctionType } from "@types";
import { FUNCTIONS } from "@entities/functions-and-blocks/config";
import type { FunctionsRoutesTypes } from "../routesTypedMap";
import type { MiddlewareType } from "./types";

const functionNameParam = (functionName: string) => {
  if (!FUNCTIONS.hasOwnProperty(functionName)) {
    return false;
  }

  return functionName as HumanFunctionType;
};

export const functionsMiddleWare: MiddlewareType = (to, from, next) => {
  if (from.name === "functions.card") {
    const params =
      from.params as FunctionsRoutesTypes["functions.card"]["params"];
    if (functionNameParam(params.functionName)) {
      next();
      return true;
    }
    return false;
  }
};
