import type { RouteRecordInfo } from "vue-router";
import type { SociotypeIdType } from "@types";
import type { TabName } from "@pages/sociotypes/config";

type SociotypeCardRouteType = RouteRecordInfo<
  "card",
  "/s/:id",
  { id: SociotypeIdType },
  { id: SociotypeIdType }
>;

type SociotypeTabRouteType = RouteRecordInfo<
  "sociotypes",
  "/s/:id/:tabName",
  { id: SociotypeIdType; tabName: TabName },
  { id: SociotypeIdType; tabName: TabName }
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
