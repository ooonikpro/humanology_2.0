import type { RouteRecordInfo } from "vue-router";
import type { SociotypeIdType, SociotypeTabNameType } from "@types";

type SociotypeCardRouteType = RouteRecordInfo<
  "card",
  "/s/:id",
  { id: SociotypeIdType },
  { id: SociotypeIdType }
>;

type SociotypeTabRouteType = RouteRecordInfo<
  "sociotypes",
  "/s/:id/:tabName",
  { id: SociotypeIdType; tabName: SociotypeTabNameType },
  { id: SociotypeIdType; tabName: SociotypeTabNameType }
>;

type KidsRouteType = RouteRecordInfo<
  "kids",
  "/k",
  Record<never, never>,
  Record<never, never>
>;

type SociotypeKidsCardRouteType = RouteRecordInfo<
  "kids.card",
  "/k/:id",
  { id: SociotypeIdType },
  { id: SociotypeIdType }
>;

export type SociotypesRoutesTypes = {
  card: SociotypeCardRouteType;
  sociotypes: SociotypeTabRouteType;
  kids: KidsRouteType;
  "kids.card": SociotypeKidsCardRouteType;
};

// ? need remove isSociotypeId
