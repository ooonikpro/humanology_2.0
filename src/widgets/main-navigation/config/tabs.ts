import type { LinkTabPropsType } from "@entities/navigation";

export type TabType = LinkTabPropsType & { isPremium?: boolean, isWithImg?: boolean };

export const tabs: TabType[] = [
  {
    to: "/",
    iconName: "square-0",
    label: "Что это такое?",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-1",
    label: "Дисклеймер",
    size: 50,
  },
  {
    to: "/",
    iconName: "ghost",
    label: "Как определять тип?",
    size: 75,
  },
  {
    to: "/",
    iconName: "presentation-chart-bar-alt",
    label: "Тесты",
    size: 25,
  },
  {
    to: "/",
    iconName: "user-square",
    label: "Профиль",
    size: 25,
  },
  {
    to: "/",
    iconName: "users",
    label: "Люди",
    size: 75,
  },
  {
    to: "/",
    iconName: "diamond",
    label: "Специалисты",
    size: 50,
    isPremium: true,
  },
  {
    to: "/",
    iconName: "briefcase-alt",
    label: "Коллективы",
    size: 50,
    isPremium: true,
  },
  {
    to: "/",
    iconName: "chart-bubble",
    label: "Дети",
    size: 100,
    isWithImg: true
  },
  {
    to: "/",
    iconName: "square-3",
    label: "Информационный метаболизм",
    size: 100,
  },
  {
    to: "/",
    iconName: "time",
    label: "История",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-5",
    label: "Функции",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-4",
    label: "Аспекты",
    size: 100,
  },
  {
    to: "/",
    iconName: "square-6",
    label: "Квадры",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-7",
    label: "Роли и масти",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-8",
    label: "Клубы и группы",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-9",
    label: "Типы мышления",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-10",
    label: "Признаки Рейнина",
    size: 50,
  },
  {
    to: "/",
    iconName: "square-11",
    label: "Дихотомии Юнга",
    size: 50,
  },
];
