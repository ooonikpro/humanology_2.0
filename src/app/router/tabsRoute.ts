import { createParam, createRoute, path } from "@kitbag/router";
import TabsPage from "@pages/TabsPage.vue";
import type { GetParamTypeByRoute } from "./utils";

export type TabsNamesType =
  | "AspectsPage"
  | "ChildsPage"
  | "ClubsAndGroupsPage"
  | "DisclaimerPage"
  | "FunctionsPage"
  | "HistoryPage"
  | "HowDefineTypePage"
  | "InformationalMetabolismPage"
  | "JungsDichotomysPage"
  | "MindsetKindsPage"
  | "PeoplePage"
  | "ProfilePage"
  | "ProPersonsPage"
  | "QuadrasPage"
  | "RaininsSignsPage"
  | "RolesAndSuitsPage"
  | "TeamsPage"
  | "TestsPage"
  | "WhatIsPage";

const tabsNames: TabsNamesType[] = [
  "AspectsPage",
  "ChildsPage",
  "ClubsAndGroupsPage",
  "DisclaimerPage",
  "FunctionsPage",
  "HistoryPage",
  "HowDefineTypePage",
  "InformationalMetabolismPage",
  "JungsDichotomysPage",
  "MindsetKindsPage",
  "PeoplePage",
  "ProfilePage",
  "ProPersonsPage",
  "QuadrasPage",
  "RaininsSignsPage",
  "RolesAndSuitsPage",
  "TeamsPage",
  "TestsPage",
  "WhatIsPage"
];

const tabsNameParam = createParam((value, { invalid }) => {
  if (!tabsNames.includes(value as TabsNamesType)) {
    throw invalid("Некорректный параметр tabsName");
  }

  return value as TabsNamesType;
});

export const tabsRoute = createRoute({
  path: path("/tabs/[tabName]", {
    tabName: tabsNameParam,
  }),
  name: "tabs",
  component: TabsPage,
});

export type TabsRouteParamsType = GetParamTypeByRoute<typeof tabsRoute>;
