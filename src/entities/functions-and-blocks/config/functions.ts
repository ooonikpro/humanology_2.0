import type { FunctionLevel, HumanFunction } from "@types";

export const FUNCTIONS: Record<
  HumanFunction,
  {
    name: string;
    lvl: FunctionLevel;
    number: number;
    type: "intensive" | "extensive";
  }
> = {
  base: {
    type: "intensive", // moon
    name: "Базовая",
    number: 1,
    lvl: 8,
  },
  creative: {
    type: "extensive", // sun
    name: "Творческая",
    number: 2,
    lvl: 6,
  },
  role: {
    type: "intensive",
    name: "Ролевая",
    number: 3,
    lvl: 3,
  },
  back: {
    type: "intensive",
    name: "Фоновая",
    number: 8,
    lvl: 7,
  },
  limit: {
    type: "extensive",
    name: "Защиты",
    number: 7,
    lvl: 5,
  },
  pain: {
    type: "extensive",
    name: "Болевая",
    number: 4,
    lvl: 2,
  },
  activate: {
    type: "intensive",
    name: "Активации",
    number: 6,
    lvl: 4,
  },
  suggestive: {
    type: "extensive",
    name: "Суггестивная",
    number: 5,
    lvl: 1,
  },
} as const;

export const FUNCTION_LABELS: Record<HumanFunction, string> = {
  base: "Живу",
  creative: "Творю",
  role: "Боюсь",
  back: "Делаю",
  limit: "Бесит",
  pain: "Страдаю",
  activate: "Нравится",
  suggestive: "Хочу",
} as const;
