export const appRoutes = {
  home: "/",
  whatIsIt: "/what-is-it",
  disclaimer: "/disclaimer",
  howToDefine: "/how-to-define-type",
  tests: "/tests",
  profile: "/profile",
  people: "/people",
  specialists: "/specialists",
  teams: "/teams",
  history: "/history",
  // Общая страница детей
  kids: "/k",
  // Карточка ребенка
  kidsCard: (id = ":id") => `/k/${id}`,
  // Общая страница социотипов
  sociotypes: "/s",
  // Карточка социотипа
  sociotypeCard: (id = ":id") => `/s/${id}`,
  // Карточка социотипа + переключение на таб
  sociotypeTab: (id = ":id", tabName = ":tabName") => `/s/${id}/${tabName}`,
  // Навигация по теории
  theory: "/t",
  metabolism: "/t/information-metabolism",
  quadras: "/t/quadras",
  roles: "/t/roles-and-suits",
  clubs: "/t/clubs-and-groups",
  mindset: "/t/mindset-kinds",
  raining: "/t/raining-signs",
  jung: "/t/jung-dichotomy",
  // Общая страница аспектов
  aspects: "/t/a",
  // Описание аспекта
  aspectCard: (aspect = ":aspect") => `/t/a/${aspect}`,
  // Общая страница всех функций
  functions: "/t/f",
  // Описание конкретной функции
  functionCard: (functionName = ":functionName") => `/t/f/${functionName}`,
  // Общая страница всех интертипов
  intertypes: "/t/i",
  // Описание интертипа
  intertypeDescription: (intertype = ":intertype") => `/t/i/${intertype}`,
} as const;
