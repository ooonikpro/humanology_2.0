import type { RouteRecordInfo } from "vue-router";
import type { HumanFunctionType } from "@types";

type FunctionsRouteType = RouteRecordInfo<
  "functions",
  "/t/f",
  Record<never, never>,
  Record<never, never>
>;

type FunctionsCardRouteType = RouteRecordInfo<
  "functions.card",
  "/t/f/:functionName",
  { functionName: HumanFunctionType },
  { functionName: HumanFunctionType }
>;

export type FunctionsRoutesTypes = {
  functions: FunctionsRouteType;
  "functions.card": FunctionsCardRouteType;
};
