import type { RouteRecordInfo } from "vue-router";

type HomeRouteType = RouteRecordInfo<
  "home",
  "/",
  Record<never, never>,
  Record<never, never>
>;

type WhatIsItRouteType = RouteRecordInfo<
  "what-is-it",
  "/what-is-it",
  Record<never, never>,
  Record<never, never>
>;

type DisclaimerRouteType = RouteRecordInfo<
  "disclaimer",
  "/disclaimer",
  Record<never, never>,
  Record<never, never>
>;

type HowToDefineRouteType = RouteRecordInfo<
  "how-to-define",
  "/how-to-define-type",
  Record<never, never>,
  Record<never, never>
>;

type TestRouteType = RouteRecordInfo<
  "tests",
  "/tests",
  Record<never, never>,
  Record<never, never>
>;

type ProfileRouteType = RouteRecordInfo<
  "profile",
  "/profile",
  Record<never, never>,
  Record<never, never>
>;

type PeopleRouteType = RouteRecordInfo<
  "people",
  "/people",
  Record<never, never>,
  Record<never, never>
>;

type SpecialistsRouteType = RouteRecordInfo<
  "specialists",
  "/specialists",
  Record<never, never>,
  Record<never, never>
>;

type TeamsRouteType = RouteRecordInfo<
  "teams",
  "/teams",
  Record<never, never>,
  Record<never, never>
>;

type HistoryRouteType = RouteRecordInfo<
  "history",
  "/history",
  Record<never, never>,
  Record<never, never>
>;

// theory children

type MetabolismRouteType = RouteRecordInfo<
  "metabolism",
  "/t/information-metabolism",
  Record<never, never>,
  Record<never, never>
>;

type QuadrasRouteType = RouteRecordInfo<
  "quadras",
  "/t/quadras",
  Record<never, never>,
  Record<never, never>
>;

type RolesAndSuitsRouteType = RouteRecordInfo<
  "roles-and-suits",
  "/t/roles-and-suits",
  Record<never, never>,
  Record<never, never>
>;

type ClubsAndGroupsRouteType = RouteRecordInfo<
  "clubs-and-groups",
  "/t/clubs-and-groups",
  Record<never, never>,
  Record<never, never>
>;

type MindsRouteType = RouteRecordInfo<
  "mindset",
  "/t/mindset-kinds",
  Record<never, never>,
  Record<never, never>
>;

type RainingRouteType = RouteRecordInfo<
  "raining",
  "/t/raining-signs",
  Record<never, never>,
  Record<never, never>
>;

type JungRouteType = RouteRecordInfo<
  "jung",
  "/t/jung-dichotomy",
  Record<never, never>,
  Record<never, never>
>;

export type StaticRoutesTypes = {
  home: HomeRouteType;
  "what-is-it": WhatIsItRouteType;
  disclaimer: DisclaimerRouteType;
  "how-to-define": HowToDefineRouteType;
  tests: TestRouteType;
  profile: ProfileRouteType;
  people: PeopleRouteType;
  specialists: SpecialistsRouteType;
  teams: TeamsRouteType;
  history: HistoryRouteType;
  // theory static children routes
  metabolism: MetabolismRouteType;
  quadras: QuadrasRouteType;
  "roles-and-suits": RolesAndSuitsRouteType;
  "clubs-and-groups": ClubsAndGroupsRouteType;
  mindset: MindsRouteType;
  raining: RainingRouteType;
  jung: JungRouteType;
};
