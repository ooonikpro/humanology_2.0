import type { IntertypeRelations } from "@types";

export const INTERTYPE_RELATIONS: Record<
  IntertypeRelations,
  { name: string; description: string; lvl: number }
> = {
  dual: {
    name: "Дуальные",
    description: "Взаимодополнение",
    lvl: 4,
  },

  activity: {
    name: "Активации",
    description: "Откровенность",
    lvl: 3,
  },

  mirror: {
    name: "Зеркальные",
    description: "Уважение",
    lvl: 2,
  },

  identical: {
    name: "Тождество",
    description: "Самооценка",
    lvl: 2,
  },

  kindred: {
    name: "Родственные",
    description: "Обмен мнениями",
    lvl: 2,
  },

  semidual: {
    name: "Полудуальные",
    description: "Поддержка",
    lvl: 3,
  },

  pragmatic: {
    name: "Деловые",
    description: "Сотрудничество",
    lvl: 2,
  },

  illusionary: {
    name: "Миражные",
    description: "Расслабление",
    lvl: 3,
  },

  beneficiary: {
    name: "Заказчик",
    description: "Бессмысленность",
    lvl: 2,
  },

  giver: {
    name: "Подзаказный",
    description: "Подталкивание",
    lvl: 1,
  },

  supervisor: {
    name: "Ревизор",
    description: "Напряжение",
    lvl: 2,
  },

  underling: {
    name: "Подревизный",
    description: "Перегрузка",
    lvl: 1,
  },

  quasidentical: {
    name: "Квазитождество",
    description: "Заблуждение",
    lvl: 2,
  },

  parallel: {
    name: "Параллельные",
    description: "Опустошение",
    lvl: 2,
  },

  contrary: {
    name: "Погашение",
    description: "Скука",
    lvl: 1,
  },

  superego: {
    name: "Суперэго",
    description: "Переутомление",
    lvl: 1,
  },
};
