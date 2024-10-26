import type { DichotomyType } from "@types";

const YUNGS_DICHTOMIES: Record<DichotomyType, string> = {
  irrational: "Иррационал",
  rational: "Рационал",
  intuit: "Интуит",
  sensory: "Сенсорик",
  logic: "Логик",
  ethic: "Этик",
  extravert: "Экстраверт",
  introvert: "Интроверт",
} as const;

export default YUNGS_DICHTOMIES;
