import type { AspectType } from "@types";

export const ASPECTS: Record<AspectType, string> = {
  business: "Дела",
  logic: "Разум",
  emotions: "Эмоции",
  people: "Люди",
  will: "Воля",
  comfort: "Комфорт",
  ideas: "Идеи",
  time: "Время",
} as const;

export const ASPECTS_LABEL: Record<AspectType, string> = {
  business: "Деловая логика",
  logic: "Структурная логика",
  emotions: "Этика эмоций",
  people: "Этика отношений",
  will: "Волевая сенсорика",
  comfort: "Сенсорика ощущений",
  time: "Интуиция времени",
  ideas: "Интуиция возможностей",
} as const;

export const ASPECTS_TAGS: Record<AspectType, string[]> = {
  business: ["Страсть", "Эмоция", "Восторг"],
  logic: ["Страсть", "Эмоция", "Восторг"],
  emotions: ["Страсть", "Эмоция", "Восторг"],
  people: ["Страсть", "Эмоция", "Восторг"],
  will: ["Страсть", "Эмоция", "Восторг"],
  comfort: ["Страсть", "Эмоция", "Восторг"],
  time: ["Страсть", "Эмоция", "Восторг"],
  ideas: ["Страсть", "Эмоция", "Восторг"],
} as const;
