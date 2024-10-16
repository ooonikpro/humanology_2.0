import type { Dichotomy } from "@types";

export const YUNGS_DICHTOMIES: Record<Dichotomy, string> = {
  irrational: "Иррационал",
  rational: "Рационал",
  intuit: "Интуит",
  sensory: "Сенсорик",
  logic: "Логик",
  ethic: "Этик",
  extravert: "Экстраверт",
  introvert: "Интроверт",
} as const;
