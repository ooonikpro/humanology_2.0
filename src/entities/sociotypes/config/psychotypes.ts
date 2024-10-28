import type { PsychotypeType } from "@types";

const PSYCHOTYPES: Record<PsychotypeType, string> = {
  childlike: "Инфантил",
  aggressor: "Агрессор",
  caring: "Заботливый",
  victim: "Виктим",
} as const;

export default PSYCHOTYPES;
