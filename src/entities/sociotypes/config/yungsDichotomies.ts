import type { DichotomyType } from "@types";

export const YUNGS_DICHTOMIES_LABEL: Record<DichotomyType, string> = {
  irrational: "Иррационал",
  rational: "Рационал",
  intuit: "Интуит",
  sensory: "Сенсорик",
  logic: "Логик",
  ethic: "Этик",
  extravert: "Экстраверт",
  introvert: "Интроверт",
} as const;

export const YUNGS_DICHTOMIES_MIRROR: Record<DichotomyType, DichotomyType> = {
  irrational: "rational",
  rational: "irrational",

  intuit: "sensory",
  sensory: "intuit",

  logic: "ethic",
  ethic: "logic",

  extravert: "introvert",
  introvert: "extravert",
};
