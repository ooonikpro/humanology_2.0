import type { IconNameType } from "@types";

export interface TabsType {
  path: string;
  label: string;
  iconName: IconNameType;
}

export const tabs: TabsType[] = [
  { iconName: "card", path: "/", label: "Карточка" },
  { iconName: "ghost", path: "/2", label: "Как определить" },
  { iconName: "description", path: "/3", label: "Описание" },
  { iconName: "compatibility", path: "/4", label: "Совместимость" },
  { iconName: "people", path: "/5", label: "Люди" },
  { iconName: "briefcase-alt", path: "/6", label: "Деловые качества" },
  { iconName: "emoji-happy-square", path: "/7", label: "Развитие" },
  { iconName: "emoji-sad-square", path: "/8", label: "Юмор" },
  { iconName: "annotation", path: "/9", label: "История" },
];
