import type { SociotypeIdType } from "@types";
import type { NavigationTabPropsType } from "./types";

export const tabs: (NavigationTabPropsType & { id: SociotypeIdType })[] = [
  {
    id: "ENFJ",
    iconName: "card",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Карточка",
  },
  {
    id: "ENFJ",
    iconName: "ghost",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Как определить",
  },
  {
    id: "ENFJ",
    iconName: "description",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Описание",
  },
  {
    id: "ENFJ",
    iconName: "compatibility",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Совместимость",
  },
  {
    id: "ENFJ",
    iconName: "people",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Люди",
  },
  {
    id: "ENFJ",
    iconName: "briefcase-alt",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Деловые качества",
  },
  {
    id: "ENFJ",
    iconName: "emoji-happy-square",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Развитие",
  },
  {
    id: "ENFJ",
    iconName: "emoji-sad-square",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "Юмор",
  },
  {
    id: "ENFJ",
    iconName: "annotation",
    to: (resolve) => resolve("sociotypes", { id: "ENFJ" }),
    label: "История",
  },
];
