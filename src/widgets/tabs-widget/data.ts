import type { IconNameType } from "@types";

export interface TabsType {
  id: string;
  to: string;
  label: string;
  iconName: IconNameType;
}

export const tabs: TabsType[] = [
  { id: "tab-1", iconName: "card", to: "/", label: "Карточка" },
  { id: "tab-2", iconName: "ghost", to: "/2", label: "Как определить" },
  { id: "tab-3", iconName: "description", to: "/3", label: "Описание" },
  { id: "tab-4", iconName: "compatibility", to: "/4", label: "Совместимость" },
  { id: "tab-5", iconName: "people", to: "/5", label: "Люди" },
  {
    id: "tab-6",
    iconName: "briefcase-alt",
    to: "/6",
    label: "Деловые качества",
  },
  { id: "tab-7", iconName: "emoji-happy-square", to: "/7", label: "Развитие" },
  { id: "tab-8", iconName: "emoji-sad-square", to: "/8", label: "Юмор" },
  { id: "tab-9", iconName: "annotation", to: "/9", label: "История" },
];
