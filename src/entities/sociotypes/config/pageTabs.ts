import type { SociotypeTabType } from "@types";

export const SOCIOTYPE_CARD_TAB: SociotypeTabType = {
  name: "card",
  iconName: "card",
  label: "Карточка",
};

export const SOCIOTYPE_PAGE_TABS: SociotypeTabType[] = [
  SOCIOTYPE_CARD_TAB,
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
    label: "Истории",
  },
] as const;

export type SociotypeTabNameType = (typeof SOCIOTYPE_PAGE_TABS)[number]["name"];
