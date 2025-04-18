import type { BlockNameType, HumanFunctionType } from "@types";

export const BLOCKS: Record<BlockNameType, string> = {
  ego: "Блок Эго",
  superego: "Блок Суперэго",
  id: "Блок Айди",
  superid: "Блок Суперайди",
};

export const BLOCK_WITH_FUNCTIONS: Record<
  BlockNameType,
  [HumanFunctionType, HumanFunctionType]
> = {
  ego: ["base", "creative"],
  id: ["pain", "role"],
  superego: ["limit", "back"],
  superid: ["activate", "suggestive"],
};

export const BLOCKS_LABELS: Record<BlockNameType, string> = {
  ego: "Взрослый — Воздействие на мир",
  superego: "Ориентация в мире",
  id: "Социальная реализация",
  superid: "Ребенок — Самочувствие",
};

export const LARGE_FUNCTION_CARD: HumanFunctionType[] = [
  "base",
  "creative",
  "activate",
  "suggestive",
];
export const FUNCTION_CARD_WITHOUT_ICON: HumanFunctionType[] = [
  "limit",
  "role",
];

export const FUNCTION_CARD_WITHOUT_BACKGROUND_IMAGE: HumanFunctionType[] = [
  "back",
  "role",
];
