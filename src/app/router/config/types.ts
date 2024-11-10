import type { RouteRecordRaw } from "vue-router";

type RouteWithChildrenType = Required<Pick<RouteType, "children">>

type GetRouteName<T extends RouteType> =
  T extends RouteWithChildrenType
    ? T["name"] | GetRoutesNames<T["children"]>
    : T["name"];

export type RouteType = Omit<RouteRecordRaw, "name" | "children"> & {
  name: string;
  children?: readonly RouteType[];
};

export type GetRoutesNames<T extends readonly RouteType[]> = GetRouteName<
  T[number]
>;
