import type { RouteRecordRaw } from "vue-router";
import HomePage from "@pages/HomePage.vue";
import { ASPECTS_CARD_ROUTE, ASPECTS_ROUTE } from "./aspects";
import { FUNCTIONS_CARD_ROUTE, FUNCTIONS_ROUTE } from "./functions";
import { INTERTYPES_DESCRIPTION_ROUTE, INTERTYPES_ROUTE } from "./intertypes";

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

// Children of THEORY_ROUTE

const METABOLISM_ROUTE: RouteRecordRaw = {
  path: "information-metabolism",
  name: "metabolism",
  component: () => import("@pages/MetabolismPage.vue"),
};

const QUADRAS_ROUTE: RouteRecordRaw = {
  path: "quadras",
  name: "quadras",
  component: () => import("@pages/QuadrasPage.vue"),
};

const ROLES_AND_SUITS_ROUTE: RouteRecordRaw = {
  path: "roles-and-suits",
  name: "roles-and-suits",
  component: () => import("@pages/RolesAndSuitsPage.vue"),
};

const CLUBS_AND_GROUPS_ROUTE: RouteRecordRaw = {
  path: "clubs-and-groups",
  name: "clubs-and-groups",
  component: () => import("@pages/ClubsAndGroupsPage.vue"),
};

const MINDSET_ROUTE: RouteRecordRaw = {
  path: "mindset-kinds",
  name: "mindset",
  component: () => import("@pages/MindsetKindsPage.vue"),
};

const RAINING_SIGNS_ROUTE: RouteRecordRaw = {
  path: "raining-signs",
  name: "raining",
  component: () => import("@pages/RainingSignsPage.vue"),
};

const JUNG_DICHOTOMY_ROUTE: RouteRecordRaw = {
  path: "jung-dichotomy",
  name: "jung",
  component: () => import("@pages/JungDichotomyPage.vue"),
};

export const THEORY_ROUTE: RouteRecordRaw = {
  path: "/t",
  name: "theory",
  component: () => import("@pages/TheoryPage.vue"),
  children: [
    ASPECTS_ROUTE,
    ASPECTS_CARD_ROUTE,
    FUNCTIONS_ROUTE,
    FUNCTIONS_CARD_ROUTE,
    INTERTYPES_ROUTE,
    INTERTYPES_DESCRIPTION_ROUTE,
    // static children
    METABOLISM_ROUTE,
    QUADRAS_ROUTE,
    ROLES_AND_SUITS_ROUTE,
    CLUBS_AND_GROUPS_ROUTE,
    MINDSET_ROUTE,
    RAINING_SIGNS_ROUTE,
    JUNG_DICHOTOMY_ROUTE,
  ] satisfies RouteRecordRaw[],
};
