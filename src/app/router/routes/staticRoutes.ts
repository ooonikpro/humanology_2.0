import HomePage from "@pages/HomePage.vue";

import type { RouteRecordRaw } from "vue-router";

export const HOME_ROUTE: RouteRecordRaw = {
  path: "/",
  name: "home",
  component: HomePage,
};

export const WHAT_IS_IT_ROUTE: RouteRecordRaw = {
  path: "/what-is-it",
  name: "what-is-it",
  component: () => import("@pages/WhatIsPage.vue"),
};

export const DISCLAIMER_ROUTE: RouteRecordRaw = {
  path: "/disclaimer",
  name: "disclaimer",
  component: () => import("@pages/DisclaimerPage.vue"),
};

export const HOW_TO_DEFINE_ROUTE: RouteRecordRaw = {
  path: "/how-to-define-type",
  name: "how-to-define",
  component: () => import("@pages/HowToDefineTypePage.vue"),
};

export const TESTS_ROUTE: RouteRecordRaw = {
  path: "/tests",
  name: "tests",
  component: () => import("@pages/TestsPage.vue"),
};

export const PROFILE_ROUTE: RouteRecordRaw = {
  path: "/profile",
  name: "profile",
  component: () => import("@pages/ProfilePage.vue"),
};

export const PEOPLE_ROUTE: RouteRecordRaw = {
  path: "/people",
  name: "people",
  component: () => import("@pages/PeoplesPage.vue"),
};

export const SPECIALISTS_ROUTE: RouteRecordRaw = {
  path: "/specialists",
  name: "specialists",
  component: () => import("@pages/SpecialistsPage.vue"),
};

export const TEAMS_ROUTE: RouteRecordRaw = {
  path: "/teams",
  name: "teams",
  component: () => import("@pages/TeamsPage.vue"),
};

export const HISTORY_ROUTE: RouteRecordRaw = {
  path: "/history",
  name: "history",
  component: () => import("@pages/HistoryPage.vue"),
};

// ? Children of THEORY_ROUTE

export const METABOLISM_ROUTE: RouteRecordRaw = {
  path: "/t/information-metabolism",
  name: "metabolism",
  component: () => import("@pages/MetabolismPage.vue"),
};

export const QUADRAS_ROUTE: RouteRecordRaw = {
  path: "/t/quadras",
  name: "quadras",
  component: () => import("@pages/QuadrasPage.vue"),
};

export const ROLES_AND_SUITS_ROUTE: RouteRecordRaw = {
  path: "/t/roles-and-suits",
  name: "roles-and-suits",
  component: () => import("@pages/RolesAndSuitsPage.vue"),
};

export const CLUBS_AND_GROUPS_ROUTE: RouteRecordRaw = {
  path: "/t/clubs-and-groups",
  name: "clubs-and-groups",
  component: () => import("@pages/ClubsAndGroupsPage.vue"),
};

export const MINDSET_ROUTE: RouteRecordRaw = {
  path: "/t/mindset-kinds",
  name: "mindset",
  component: () => import("@pages/MindsetKindsPage.vue"),
};

export const RAINING_SIGNS_ROUTE: RouteRecordRaw = {
  path: "/t/raining-signs",
  name: "raining",
  component: () => import("@pages/RainingSignsPage.vue"),
};

export const JUNG_DICHOTOMY_ROUTE: RouteRecordRaw = {
  path: "/t/jung-dichotomy",
  name: "jung",
  component: () => import("@pages/JungDichotomyPage.vue"),
};
