import type { HumanFunction } from "@types";

export const FUNCTION: Record<HumanFunction, string> = {
  base: "Базовая",
  creative: "Творческая",
  role: "Ролевая",
  back: "Фоновая",
  limit: "Защитная",
  pain: "Болевая",
  activate: "Активационная",
  suggestive: "Суггестивная",
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
