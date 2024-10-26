import type { TarotType } from "@types";

const TAROT: Record<TarotType, string> = {
  swords: "Мечи",
  pentacles: "Пентакли",
  cups: "Кубки",
  wands: "Посохи",
} as const;

export default TAROT;
