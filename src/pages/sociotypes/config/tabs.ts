const SOCIOTYPE_PAGE_TABS = [
  {
    name: "card",
    iconName: "card",
    label: "Карточка",
  },
  {
    name: "how-to-define",
    iconName: "ghost",
    label: "Как определить",
  },
  {
    name: "description",
    iconName: "description",
    label: "Описание",
  },
  {
    name: "compatibility",
    iconName: "compatibility",
    label: "Совместимость",
  },
  {
    name: "people",
    iconName: "people",
    label: "Люди",
  },
  {
    name: "business-qualities",
    iconName: "briefcase-alt",
    label: "Деловые качества",
  },
  {
    name: "progress",
    iconName: "emoji-happy-square",
    label: "Развитие",
  },
  {
    name: "humor",
    iconName: "emoji-sad-square",
    label: "Юмор",
  },
  {
    name: "history",
    iconName: "annotation",
    label: "История",
  },
] as const;

export default SOCIOTYPE_PAGE_TABS;

export type TabName = (typeof SOCIOTYPE_PAGE_TABS)[number]["name"];
