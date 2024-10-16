import type { SignProp, ZodiacSign } from "@types";

export const ZODIAC_SIGNS: Record<ZodiacSign, SignProp> = {
  aries: {
    label: "Овен",
    element: "fire",
  },
  taurus: {
    label: "Телец",
    element: "earth",
  },
  gemini: {
    label: "Близнецы",
    element: "air",
  },
  cancer: {
    label: "Рак",
    element: "water",
  },
  leo: {
    label: "Лев",
    element: "fire",
  },
  virgo: {
    label: "Дева",
    element: "earth",
  },
  libra: {
    label: "Весы",
    element: "air",
  },
  scorpio: {
    label: "Скорпион",
    element: "water",
  },
  sagittarius: {
    label: "Стрелец",
    element: "fire",
  },
  capricorn: {
    label: "Козерог",
    element: "earth",
  },
  aquarius: {
    label: "Водолеи",
    element: "air",
  },
  pisces: {
    label: "Рыбы",
    element: "water",
  },
} as const;
