import { createRoute } from "@kitbag/router";
import HomePage from "@pages/HomePage.vue";

import { defineAsyncComponent } from "vue";

export const HOME_ROUTE = createRoute({
  path: "/",
  name: "home",
  component: HomePage,
});

export const WHAT_IS_IT_ROUTE = createRoute({
  path: "/what-is-it",
  name: "what-is-it",
  component: defineAsyncComponent(() => import("@pages/WhatIsPage.vue")),
});

export const DISCLAIMER_ROUTE = createRoute({
  path: "/disclaimer",
  name: "disclaimer",
  component: defineAsyncComponent(() => import("@pages/DisclaimerPage.vue")),
});

export const HOW_TO_DEFINE_ROUTE = createRoute({
  path: "/how-to-define-type",
  name: "how-to-define",
  component: defineAsyncComponent(
    () => import("@pages/HowToDefineTypePage.vue"),
  ),
});

export const TESTS_ROUTE = createRoute({
  path: "/tests",
  name: "tests",
  component: defineAsyncComponent(() => import("@pages/TestsPage.vue")),
});

export const PROFILE_ROUTE = createRoute({
  path: "/profile",
  name: "profile",
  component: defineAsyncComponent(() => import("@pages/ProfilePage.vue")),
});

export const PEOPLE_ROUTE = createRoute({
  path: "/people",
  name: "people",
  component: defineAsyncComponent(() => import("@pages/PeoplesPage.vue")),
});

export const SPECIALISTS_ROUTE = createRoute({
  path: "/specialists",
  name: "specialists",
  component: defineAsyncComponent(() => import("@pages/SpecialistsPage.vue")),
});

export const TEAMS_ROUTE = createRoute({
  path: "/teams",
  name: "teams",
  component: defineAsyncComponent(() => import("@pages/TeamsPage.vue")),
});

export const THEORY_ROUTE = createRoute({
  path: "/t",
  name: "theory",
});

export const METABOLISM_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/information-metabolism",
  name: "metabolism",
  component: defineAsyncComponent(() => import("@pages/MetabolismPage.vue")),
});

export const HISTORY_ROUTE = createRoute({
  path: "/history",
  name: "history",
  component: defineAsyncComponent(() => import("@pages/HistoryPage.vue")),
});

export const FUNCTIONS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/functions",
  name: "functions",
  component: defineAsyncComponent(() => import("@pages/FunctionsPage.vue")),
});

export const ASPECTS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/aspects",
  name: "aspects",
  component: defineAsyncComponent(() => import("@pages/AspectsPage.vue")),
});

export const QUADRAS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/quadras",
  name: "quadras",
  component: defineAsyncComponent(() => import("@pages/QuadrasPage.vue")),
});

export const ROLES_AND_SUITS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/roles-and-suits",
  name: "roles-and-suits",
  component: defineAsyncComponent(() => import("@pages/RolesAndSuitsPage.vue")),
});

export const CLUBS_AND_GROUPS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/clubs-and-groups",
  name: "clubs-and-groups",
  component: defineAsyncComponent(
    () => import("@pages/ClubsAndGroupsPage.vue"),
  ),
});

export const MINDSET_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/mindset-kinds",
  name: "mindset",
  component: defineAsyncComponent(() => import("@pages/MindsetKindsPage.vue")),
});

export const RAINING_SIGNS_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/raining-signs",
  name: "raining",
  component: defineAsyncComponent(() => import("@pages/RainingSignsPage.vue")),
});

export const JUNG_DICHOTOMY_ROUTE = createRoute({
  parent: THEORY_ROUTE,
  path: "/jung-dichotomy",
  name: "jung",
  component: defineAsyncComponent(() => import("@pages/JungDichotomyPage.vue")),
});
