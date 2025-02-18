import type { BaziSignType, SignPropType } from "@types";

export const BAZI_SIGNS: Record<BaziSignType, SignPropType> = {
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
  rabbit: {
    label: "Заяц",
    quadra: "water",
  },
  snake: {
    label: "Змея",
    quadra: "earth",
  },
} as const;
