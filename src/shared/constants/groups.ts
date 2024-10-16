import type { Psychotype } from "@types";

export const GROUPS: Record<Psychotype, string> = {
  infantile: "Инфантил",
  aggressor: "Агрессор",
  care: "Заботливый",
  victim: "Виктим",
} as const;
