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
    name: "Защитная",
    number: 7,
    lvl: 5,
  },
  pain: {
    name: "Болевая",
    number: 4,
    lvl: 2,
  },
  activate: {
    name: "Активационная",
    number: 6,
    lvl: 4,
  },
  suggestive: {
    name: "Суггестивная",
    number: 5,
    lvl: 1,
  },
} as const;

export const FUNCTION_LVL_NAME: Record<FunctionLevel, string> = {
  8: "Четырехмерная",
  7: "Четырехмерная",
  6: "Трехмерная",
  5: "Трехмерная",
  4: "Двумерная",
  3: "Двумерная",
  2: "Одномерная",
  1: "Одномерная",
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

export const FUNCTION_DESCRIPTION: Record<HumanFunctionType, string> = {
  base: "Тут должно быть описание в одно или несколько предложений",
  creative: "Тут должно быть описание в одно или несколько предложений",
  role: "Тут должно быть описание в одно или несколько предложений",
  back: "Тут должно быть описание в одно или несколько предложений",
  limit: "Тут должно быть описание в одно или несколько предложений",
  pain: "Тут должно быть описание в одно или несколько предложений",
  activate: "Тут должно быть описание в одно или несколько предложений",
  suggestive: "Тут должно быть описание в одно или несколько предложений",
} as const;

export const FUNCTION_TAGS: Record<HumanFunctionType, string[]> = {
  base: ["Страсть", "Эмоция", "Восторг"],
  creative: ["Страсть", "Эмоция", "Восторг"],
  role: ["Страсть", "Эмоция", "Восторг"],
  back: ["Страсть", "Эмоция", "Восторг"],
  limit: ["Страсть", "Эмоция", "Восторг"],
  pain: ["Страсть", "Эмоция", "Восторг"],
  activate: ["Страсть", "Эмоция", "Восторг"],
  suggestive: ["Страсть", "Эмоция", "Восторг"],
};
