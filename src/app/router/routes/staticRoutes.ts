import { createRoute } from "@kitbag/router";
import HomePage from "@pages/HomePage.vue";
import WhatIsPage from "@pages/WhatIsPage.vue";
import DisclaimerPage from "@pages/DisclaimerPage.vue";
import HowToDefineTypePage from "@pages/HowToDefineTypePage.vue";
import TestsPage from "@pages/TestsPage.vue";
import ProfilePage from "@pages/ProfilePage.vue";
import PeoplesPage from "@pages/PeoplesPage.vue";
import SpecialistsPage from "@pages/SpecialistsPage.vue";
import TeamsPage from "@pages/TeamsPage.vue";
import ChildrenPage from "@pages/ChildrenPage.vue";
import MetabolismPage from "@pages/MetabolismPage.vue";
import HistoryPage from "@pages/HistoryPage.vue";
import FunctionsPage from "@pages/FunctionsPage.vue";
import AspectsPage from "@pages/AspectsPage.vue";
import QuadrasPage from "@pages/QuadrasPage.vue";
import RolesAndSuitsPage from "@pages/RolesAndSuitsPage.vue";
import ClubsAndGroupsPage from "@pages/ClubsAndGroupsPage.vue";
import MindsetKindsPage from "@pages/MindsetKindsPage.vue";
import RainingSignsPage from "@pages/RainingSignsPage.vue";
import JungDichotomyPage from "@pages/JungDichotomyPage.vue";

export const HOME_ROUTE = createRoute({
  path: "/",
  name: "home",
  component: HomePage,
});

export const WHAT_IS_IT_ROUTE = createRoute({
  path: "/what-is-it",
  name: "what-is-it",
  component: WhatIsPage,
});

export const DISCLAIMER_ROUTE = createRoute({
  path: "/disclaimer",
  name: "disclaimer",
  component: DisclaimerPage,
});

export const HOW_TO_DEFINE_ROUTE = createRoute({
  path: "/how-to-define-type",
  name: "how-to-define",
  component: HowToDefineTypePage,
});

export const TESTS_ROUTE = createRoute({
  path: "/tests",
  name: "tests",
  component: TestsPage,
});

export const PROFILE_ROUTE = createRoute({
  path: "/profile",
  name: "profile",
  component: ProfilePage,
});

export const PEOPLE_ROUTE = createRoute({
  path: "/people",
  name: "people",
  component: PeoplesPage,
});

export const SPECIALISTS_ROUTE = createRoute({
  path: "/specialists",
  name: "specialists",
  component: SpecialistsPage,
});

export const TEAMS_ROUTE = createRoute({
  path: "/teams",
  name: "teams",
  component: TeamsPage,
});

export const CHILDREN_ROUTE = createRoute({
  path: "/children",
  name: "children",
  component: ChildrenPage,
});

export const METABOLISM_ROUTE = createRoute({
  path: "/information-metabolism",
  name: "metabolism",
  component: MetabolismPage,
});

export const HISTORY_ROUTE = createRoute({
  path: "/history",
  name: "history",
  component: HistoryPage,
});

export const FUNCTIONS_ROUTE = createRoute({
  path: "/functions",
  name: "functions",
  component: FunctionsPage,
});

export const ASPECTS_ROUTE = createRoute({
  path: "/aspects",
  name: "aspects",
  component: AspectsPage,
});

export const QUADRAS_ROUTE = createRoute({
  path: "/quadras",
  name: "quadras",
  component: QuadrasPage,
});

export const ROLES_AND_SUITS_ROUTE = createRoute({
  path: "/roles-and-suits",
  name: "roles-and-suits",
  component: RolesAndSuitsPage,
});

export const CLUBS_AND_GROUPS_ROUTE = createRoute({
  path: "/clubs-and-groups",
  name: "clubs-and-groups",
  component: ClubsAndGroupsPage,
});

export const MINDSET_ROUTE = createRoute({
  path: "/mindset-kinds",
  name: "mindset",
  component: MindsetKindsPage,
});

export const RAINING_SIGNS_ROUTE = createRoute({
  path: "/raining-signs",
  name: "raining",
  component: RainingSignsPage,
});

export const JUNG_DICHOTOMY_ROUTE = createRoute({
  path: "/jung-dichotomy",
  name: "jung",
  component: JungDichotomyPage,
});
