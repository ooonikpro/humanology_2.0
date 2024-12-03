import type { ParamGetSet, Route } from "@kitbag/router";

type GetParamValueType<T extends { [key: string]: ParamGetSet | unknown }> = {
  [key in keyof T]: T[key] extends ParamGetSet
    ? ReturnType<T[key]["get"]>
    : T[key];
};

export type GetParamTypeByRoute<R extends Route> = GetParamValueType<
  R["path"]["params"]
>;
