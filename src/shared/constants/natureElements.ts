import type { Quadras } from "@types";

export const QUADRAS: Record<Quadras, string> = {
  air: "Воздух",
  fire: "Огонь",
  water: "Вода",
  earth: "Земля",
} as const;

export const QUADRAS_SUBTITLE: Record<Quadras, string[]> = {
  air: ["Дети", "Альфа"],
  fire: ["Подростки", "Бета"],
  water: ["Взрослые", "Гамма"],
  earth: ["Старики", "Дельта"],
};
