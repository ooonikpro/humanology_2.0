import type { BaziSign, SignPropType } from "@types";

export const BAZI_SIGNS: Record<BaziSign, SignPropType> = {
  bull: {
    label: "Бык",
    quadra: "earth",
  },
  dragon: {
    label: "Дракон",
    quadra: "air",
  },
  goat: {
    label: "Коза",
    quadra: "water",
  },
  rat: {
    label: "Крыса",
    quadra: "air",
  },
  horse: {
    label: "Лошадь",
    quadra: "fire",
  },
  monkey: {
    label: "Обезьяна",
    quadra: "air",
  },
  chicken: {
    label: "Петух",
    quadra: "earth",
  },
  dog: {
    label: "Собака",
    quadra: "fire",
  },
  pig: {
    label: "Свинья",
    quadra: "water",
  },
  tiger: {
    label: "Тигр",
    quadra: "fire",
  },
  hare: {
    label: "Заяц",
    quadra: "water",
  },
  snake: {
    label: "Змея",
    quadra: "earth",
  },
} as const;
