import type { QuadrasType } from "@types";

export const QUADRAS: QuadrasType[] = [
  "air",
  "fire",
  "water",
  "earth",
] as const;

export const QUADRAS_LABEL: Record<QuadrasType, string> = {
  air: "Воздух",
  fire: "Огонь",
  water: "Вода",
  earth: "Земля",
} as const;

export const QUADRAS_SUBTITLE: Record<QuadrasType, [string, string]> = {
  air: ["Альфа", "Дети"],
  fire: ["Бета", "Подростки"],
  water: ["Гамма", "Взрослые"],
  earth: ["Дельта", "Старики"],
};
