import type { SignPropType, ZodiacSign } from "@types";

export const ZODIAC_SIGNS: Record<ZodiacSign, SignPropType> = {
  aries: {
    label: "Овен",
    quadra: "fire",
  },
  taurus: {
    label: "Телец",
    quadra: "earth",
  },
  gemini: {
    label: "Близнецы",
    quadra: "air",
  },
  cancer: {
    label: "Рак",
    quadra: "water",
  },
  leo: {
    label: "Лев",
    quadra: "fire",
  },
  virgo: {
    label: "Дева",
    quadra: "earth",
  },
  libra: {
    label: "Весы",
    quadra: "air",
  },
  scorpio: {
    label: "Скорпион",
    quadra: "water",
  },
  sagittarius: {
    label: "Стрелец",
    quadra: "fire",
  },
  capricorn: {
    label: "Козерог",
    quadra: "earth",
  },
  aquarius: {
    label: "Водолеи",
    quadra: "air",
  },
  pisces: {
    label: "Рыбы",
    quadra: "water",
  },
} as const;
