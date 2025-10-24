import type { BlockNameType, HumanFunctionType, IconSizeType } from "@types";

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

type FunctionCardConfigItemType = {
  hasBackground: boolean;
  iconSize?: IconSizeType;
  size: "large" | "default";
  opacity: number;
};
export const FUNCTION_CARD_CONFIG: Record<
  HumanFunctionType,
  FunctionCardConfigItemType
> = {
  base: {
    hasBackground: true,
    iconSize: "80",
    size: "large",
    opacity: 1,
  },
  creative: {
    hasBackground: true,
    iconSize: "64",
    size: "large",
    opacity: 0.75,
  },
  suggestive: {
    hasBackground: true,
    iconSize: "80",
    size: "large",
    opacity: 1,
  },
  activate: {
    hasBackground: true,
    iconSize: "64",
    size: "large",
    opacity: 0.75,
  },
  role: {
    hasBackground: false,
    size: "default",
    opacity: 1,
  },
  pain: {
    hasBackground: true,
    iconSize: "64",
    size: "default",
    opacity: 1,
  },
  back: {
    hasBackground: false,
    iconSize: "64",
    size: "default",
    opacity: 1,
  },
  limit: {
    hasBackground: true,
    size: "default",
    opacity: 1,
  },
};
