import type { QuadrasType } from "@types";

export const QUADRAS: Record<QuadrasType, string> = {
  air: "Воздух",
  fire: "Огонь",
  water: "Вода",
  earth: "Земля",
} as const;

export const QUADRAS_SUBTITLE: Record<QuadrasType, string[]> = {
  air: ["Дети", "Альфа"],
  fire: ["Подростки", "Бета"],
  water: ["Взрослые", "Гамма"],
  earth: ["Старики", "Дельта"],
};
