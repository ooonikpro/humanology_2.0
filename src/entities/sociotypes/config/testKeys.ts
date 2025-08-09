import type { SociotypeIdType } from "@types";

// Ключи для теста Мегедь-Овчарова (4 вопроса)
export const MEGED_OVCHAROVA_KEYS = {
  // Вопрос 1: Рациональность/Иррациональность
  1: {
    0: "rational", // Рациональность
    1: "irrational", // Иррациональность
  },
  // Вопрос 2: Логика/Этика
  2: {
    0: "logic", // Логика
    1: "ethics", // Этика
  },
  // Вопрос 3: Сенсорика/Интуиция
  3: {
    0: "sensing", // Сенсорика
    1: "intuition", // Интуиция
  },
  // Вопрос 4: Экстраверсия/Интроверсия
  4: {
    0: "introversion", // Интроверсия
    1: "extraversion", // Экстраверсия
  },
};

// Ключи для теста Воробьева (28 вопросов)
export const VOROBIEV_KEYS = {
  // Рациональность/Иррациональность (вопросы 1-7)
  1: { 0: "rational", 1: "irrational" },
  2: { 0: "rational", 1: "irrational" },
  3: { 0: "rational", 1: "irrational" },
  4: { 0: "rational", 1: "irrational" },
  5: { 0: "rational", 1: "irrational" },
  6: { 0: "rational", 1: "irrational" },
  7: { 0: "rational", 1: "irrational" },
  
  // Логика/Этика (вопросы 8-14)
  8: { 0: "logic", 1: "ethics" },
  9: { 0: "logic", 1: "ethics" },
  10: { 0: "logic", 1: "ethics" },
  11: { 0: "logic", 1: "ethics" },
  12: { 0: "logic", 1: "ethics" },
  13: { 0: "logic", 1: "ethics" },
  14: { 0: "logic", 1: "ethics" },
  
  // Сенсорика/Интуиция (вопросы 15-21)
  15: { 0: "sensing", 1: "intuition" },
  16: { 0: "sensing", 1: "intuition" },
  17: { 0: "sensing", 1: "intuition" },
  18: { 0: "sensing", 1: "intuition" },
  19: { 0: "sensing", 1: "intuition" },
  20: { 0: "sensing", 1: "intuition" },
  21: { 0: "sensing", 1: "intuition" },
  
  // Экстраверсия/Интроверсия (вопросы 22-28)
  22: { 0: "extraversion", 1: "introversion" },
  23: { 0: "extraversion", 1: "introversion" },
  24: { 0: "extraversion", 1: "introversion" },
  25: { 0: "extraversion", 1: "introversion" },
  26: { 0: "extraversion", 1: "introversion" },
  27: { 0: "extraversion", 1: "introversion" },
  28: { 0: "extraversion", 1: "introversion" },
};

// Ключи для теста Филатовой (40 вопросов)
export const FILATOVA_KEYS = {
  // Рациональность/Иррациональность (вопросы 1-10)
  1: { 0: "rational", 1: "irrational" },
  2: { 0: "rational", 1: "irrational" },
  3: { 0: "rational", 1: "irrational" },
  4: { 0: "rational", 1: "irrational" },
  5: { 0: "rational", 1: "irrational" },
  6: { 0: "rational", 1: "irrational" },
  7: { 0: "rational", 1: "irrational" },
  8: { 0: "rational", 1: "irrational" },
  9: { 0: "rational", 1: "irrational" },
  10: { 0: "rational", 1: "irrational" },
  
  // Логика/Этика (вопросы 11-20)
  11: { 0: "logic", 1: "ethics" },
  12: { 0: "logic", 1: "ethics" },
  13: { 0: "logic", 1: "ethics" },
  14: { 0: "logic", 1: "ethics" },
  15: { 0: "logic", 1: "ethics" },
  16: { 0: "logic", 1: "ethics" },
  17: { 0: "logic", 1: "ethics" },
  18: { 0: "logic", 1: "ethics" },
  19: { 0: "logic", 1: "ethics" },
  20: { 0: "logic", 1: "ethics" },
  
  // Сенсорика/Интуиция (вопросы 21-30)
  21: { 0: "sensing", 1: "intuition" },
  22: { 0: "sensing", 1: "intuition" },
  23: { 0: "sensing", 1: "intuition" },
  24: { 0: "sensing", 1: "intuition" },
  25: { 0: "sensing", 1: "intuition" },
  26: { 0: "sensing", 1: "intuition" },
  27: { 0: "sensing", 1: "intuition" },
  28: { 0: "sensing", 1: "intuition" },
  29: { 0: "sensing", 1: "intuition" },
  30: { 0: "sensing", 1: "intuition" },
  
  // Экстраверсия/Интроверсия (вопросы 31-40)
  31: { 0: "extraversion", 1: "introversion" },
  32: { 0: "extraversion", 1: "introversion" },
  33: { 0: "extraversion", 1: "introversion" },
  34: { 0: "extraversion", 1: "introversion" },
  35: { 0: "extraversion", 1: "introversion" },
  36: { 0: "extraversion", 1: "introversion" },
  37: { 0: "extraversion", 1: "introversion" },
  38: { 0: "extraversion", 1: "introversion" },
  39: { 0: "extraversion", 1: "introversion" },
  40: { 0: "extraversion", 1: "introversion" },
};

// Ключи для теста Кейрси (70 вопросов)
export const KEIRSEY_KEYS = {
  // Экстраверсия/Интроверсия (вопросы 1, 8, 15, 22, 29, 36, 43, 50, 57, 64)
  1: { 0: "extraversion", 1: "introversion" },
  8: { 0: "extraversion", 1: "introversion" },
  15: { 0: "extraversion", 1: "introversion" },
  22: { 0: "extraversion", 1: "introversion" },
  29: { 0: "extraversion", 1: "introversion" },
  36: { 0: "extraversion", 1: "introversion" },
  43: { 0: "extraversion", 1: "introversion" },
  50: { 0: "extraversion", 1: "introversion" },
  57: { 0: "extraversion", 1: "introversion" },
  64: { 0: "extraversion", 1: "introversion" },
  
  // Сенсорика/Интуиция (вопросы 2, 9, 16, 23, 30, 37, 44, 51, 58, 65)
  2: { 0: "sensing", 1: "intuition" },
  9: { 0: "sensing", 1: "intuition" },
  16: { 0: "sensing", 1: "intuition" },
  23: { 0: "sensing", 1: "intuition" },
  30: { 0: "sensing", 1: "intuition" },
  37: { 0: "sensing", 1: "intuition" },
  44: { 0: "sensing", 1: "intuition" },
  51: { 0: "sensing", 1: "intuition" },
  58: { 0: "sensing", 1: "intuition" },
  65: { 0: "sensing", 1: "intuition" },
  
  // Логика/Этика (вопросы 3, 10, 17, 24, 31, 38, 45, 52, 59, 66)
  3: { 0: "logic", 1: "ethics" },
  10: { 0: "logic", 1: "ethics" },
  17: { 0: "logic", 1: "ethics" },
  24: { 0: "logic", 1: "ethics" },
  31: { 0: "logic", 1: "ethics" },
  38: { 0: "logic", 1: "ethics" },
  45: { 0: "logic", 1: "ethics" },
  52: { 0: "logic", 1: "ethics" },
  59: { 0: "logic", 1: "ethics" },
  66: { 0: "logic", 1: "ethics" },
  
  // Рациональность/Иррациональность (вопросы 4, 11, 18, 25, 32, 39, 46, 53, 60, 67)
  4: { 0: "rational", 1: "irrational" },
  11: { 0: "rational", 1: "irrational" },
  18: { 0: "rational", 1: "irrational" },
  25: { 0: "rational", 1: "irrational" },
  32: { 0: "rational", 1: "irrational" },
  39: { 0: "rational", 1: "irrational" },
  46: { 0: "rational", 1: "irrational" },
  53: { 0: "rational", 1: "irrational" },
  60: { 0: "rational", 1: "irrational" },
  67: { 0: "rational", 1: "irrational" },
  
  // Остальные вопросы (5, 6, 7, 12, 13, 14, 19, 20, 21, 26, 27, 28, 33, 34, 35, 40, 41, 42, 47, 48, 49, 54, 55, 56, 61, 62, 63, 68, 69, 70)
  5: { 0: "extraversion", 1: "introversion" },
  6: { 0: "rational", 1: "irrational" },
  7: { 0: "rational", 1: "irrational" },
  12: { 0: "logic", 1: "ethics" },
  13: { 0: "rational", 1: "irrational" },
  14: { 0: "rational", 1: "irrational" },
  19: { 0: "logic", 1: "ethics" },
  20: { 0: "rational", 1: "irrational" },
  21: { 0: "rational", 1: "irrational" },
  26: { 0: "logic", 1: "ethics" },
  27: { 0: "rational", 1: "irrational" },
  28: { 0: "rational", 1: "irrational" },
  33: { 0: "logic", 1: "ethics" },
  34: { 0: "rational", 1: "irrational" },
  35: { 0: "rational", 1: "irrational" },
  40: { 0: "logic", 1: "ethics" },
  41: { 0: "rational", 1: "irrational" },
  42: { 0: "rational", 1: "irrational" },
  47: { 0: "logic", 1: "ethics" },
  48: { 0: "rational", 1: "irrational" },
  49: { 0: "rational", 1: "irrational" },
  54: { 0: "logic", 1: "ethics" },
  55: { 0: "rational", 1: "irrational" },
  56: { 0: "rational", 1: "irrational" },
  61: { 0: "logic", 1: "ethics" },
  62: { 0: "rational", 1: "irrational" },
  63: { 0: "rational", 1: "irrational" },
  68: { 0: "logic", 1: "ethics" },
  69: { 0: "rational", 1: "irrational" },
  70: { 0: "rational", 1: "irrational" },
};

// Функция для определения социотипа по результатам теста
export function determineSociotype(results: Record<string, number>): SociotypeIdType {
  const { rational, logic, sensing, extraversion } = results;
  
  // Определяем дихотомии (больше 0 = преобладание первой характеристики)
  const isRational = rational > 0;
  const isLogic = logic > 0;
  const isSensing = sensing > 0;
  const isExtraversion = extraversion > 0;
  
  // Маппинг дихотомий на социотипы (MBTI формат)
  const typeMap: Record<string, SociotypeIdType> = {
    "rational-logic-sensing-extraversion": "ESTJ",
    "rational-logic-sensing-introversion": "ISTJ",
    "rational-logic-intuition-extraversion": "ENTJ",
    "rational-logic-intuition-introversion": "INTJ",
    "rational-ethics-sensing-extraversion": "ESFJ",
    "rational-ethics-sensing-introversion": "ISFJ",
    "rational-ethics-intuition-extraversion": "ENFJ",
    "rational-ethics-intuition-introversion": "INFJ",
    "irrational-logic-sensing-extraversion": "ESTP",
    "irrational-logic-sensing-introversion": "ISTP",
    "irrational-logic-intuition-extraversion": "ENTP",
    "irrational-logic-intuition-introversion": "INTP",
    "irrational-ethics-sensing-extraversion": "ESFP",
    "irrational-ethics-sensing-introversion": "ISFP",
    "irrational-ethics-intuition-extraversion": "ENFP",
    "irrational-ethics-intuition-introversion": "INFP",
  };
  
  const key = `${isRational ? 'rational' : 'irrational'}-${isLogic ? 'logic' : 'ethics'}-${isSensing ? 'sensing' : 'intuition'}-${isExtraversion ? 'extraversion' : 'introversion'}`;
  
  return typeMap[key] || "ENTP"; // По умолчанию ENTP
}
