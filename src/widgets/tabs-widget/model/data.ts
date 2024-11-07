import type { LinkTabPropsType } from "@entities/navigation";

export type TabsType = Required<Omit<LinkTabPropsType, "size">>

export const tabs: TabsType[] = [
  { iconName: "card", to: "/", label: "Карточка" },
  { iconName: "ghost", to: "/2", label: "Как определить" },
  { iconName: "description", to: "/3", label: "Описание" },
  { iconName: "compatibility", to: "/4", label: "Совместимость" },
  { iconName: "people", to: "/5", label: "Люди" },
  { iconName: "briefcase-alt", to: "/6", label: "Деловые качества" },
  { iconName: "emoji-happy-square", to: "/7", label: "Развитие" },
  { iconName: "emoji-sad-square", to: "/8", label: "Юмор" },
  { iconName: "annotation", to: "/9", label: "История" },
];
