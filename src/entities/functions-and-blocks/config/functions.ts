import type { FunctionLevel, HumanFunctionType } from "@types";

export const FUNCTIONS: Record<
  HumanFunctionType,
  {
    name: string;
    lvl: FunctionLevel;
    number: number;
  }
> = {
  base: {
    name: "Базовая",
    number: 1,
    lvl: 8,
  },
  creative: {
    name: "Творческая",
    number: 2,
    lvl: 6,
  },
  role: {
    name: "Ролевая",
    number: 3,
    lvl: 3,
  },
  back: {
    name: "Фоновая",
    number: 8,
    lvl: 7,
  },
  limit: {
    name: "Защиты",
    number: 7,
    lvl: 5,
  },
  pain: {
    name: "Болевая",
    number: 4,
    lvl: 2,
  },
  activate: {
    name: "Активации",
    number: 6,
    lvl: 4,
  },
  suggestive: {
    name: "Суггестивная",
    number: 5,
    lvl: 1,
  },
} as const;

export const FUNCTION_LABELS: Record<HumanFunctionType, string> = {
  base: "Живу",
  creative: "Творю",
  role: "Боюсь",
  back: "Делаю",
  limit: "Бесит",
  pain: "Страдаю",
  activate: "Нравится",
  suggestive: "Хочу",
} as const;
