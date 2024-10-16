import type { Tarot } from "@types";

export const TAROT: Record<Tarot, string> = {
  swords: "Мечи",
  pentacles: "Пентакли",
  cups: "Кубки",
  wands: "Посохи",
} as const;
