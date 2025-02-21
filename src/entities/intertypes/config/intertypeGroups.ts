import type { IntertypeGroupIdType } from "@types";

export const INTERTYPE_GROUPS: Record<IntertypeGroupIdType, string> = {
  quadral: "Квадральные",
  favorable: "Благоприятные",
  neutral: "Нейтральные",
  unfavorable: "Неблагоприятные",
} as const;

export const INTERTYPE_GROUP_ORDER: IntertypeGroupIdType[] = [
  "quadral",
  "favorable",
  "neutral",
  "unfavorable",
];
