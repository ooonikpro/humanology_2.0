import type { AspectType } from "@types";
import type { RouteRecordInfo } from "vue-router";

type AspectsRouteType = RouteRecordInfo<
  "aspects",
  "/t/a",
  Record<never, never>,
  Record<never, never>
>;

type AspectsCardRouteType = RouteRecordInfo<
  "aspects.card",
  "/t/a/:aspect",
  { aspect: AspectType },
  { aspect: AspectType }
>;

export type AspectsRoutesTypes = {
  aspects: AspectsRouteType;
  "aspects.card": AspectsCardRouteType;
};
