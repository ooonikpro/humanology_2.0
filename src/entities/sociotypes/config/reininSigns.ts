import type { ReininSignType } from "@types";

export const REININ_SIGNS_LABEL: Record<ReininSignType, string> = {
  static: "Статик",
  dynamic: "Динамик",
  positivist: "Позитивист",
  negativist: "Негативист",
  questim: "Квестим",
  declatim: "Деклатим",
  tactician: "Тактик",
  strategist: "Стратег",
  constructivist: "Конструктивист",
  emotivist: "Эмотивист",
  process: "Процесс",
  result: "Результат",
  compliant: "Уступчивый",
  stubborn: "Упрямый",
  careless: "Беспечный",
  provident: "Предусмотрительный",
  reasonable: "Рассудительный",
  decisive: "Решительный",
  subjective: "Субъективный",
  objective: "Объективный",
  democrat: "Демократ",
  aristocrat: "Аристократ",
};

export const REININ_SIGNS_MIRROR: Record<ReininSignType, ReininSignType> = {
  static: "dynamic",
  dynamic: "static",

  positivist: "negativist",
  negativist: "positivist",

  questim: "declatim",
  declatim: "questim",

  tactician: "strategist",
  strategist: "tactician",

  constructivist: "emotivist",
  emotivist: "constructivist",

  process: "result",
  result: "process",

  compliant: "stubborn",
  stubborn: "compliant",

  careless: "provident",
  provident: "careless",

  reasonable: "decisive",
  decisive: "reasonable",

  subjective: "objective",
  objective: "subjective",

  democrat: "aristocrat",
  aristocrat: "democrat",
};
