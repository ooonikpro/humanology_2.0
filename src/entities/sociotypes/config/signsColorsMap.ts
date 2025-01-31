import type { BaziSignType, QuadrasType, ZodiacSignType } from "@types";

const SIGNS_COLORS_MAP: Record<ZodiacSignType | BaziSignType, QuadrasType> = {
  /* FIRE SIGNS */
  aries: "fire",
  leo: "fire",
  sagittarius: "fire",
  tiger: "fire",
  horse: "fire",
  dog: "fire",
  /* EARTH SIGNS */
  taurus: "earth",
  virgo: "earth",
  capricornus: "earth",
  bull: "earth",
  snake: "earth",
  chicken: "earth",
  /* AIR SIGNS */
  gemini: "air",
  libra: "air",
  aquarius: "air",
  rat: "air",
  dragon: "air",
  monkey: "air",
  /* WATER SIGNS */
  cancer: "water",
  scorpio: "water",
  pisces: "water",
  rabbit: "water",
  goat: "water",
  pig: "water",
};

export default SIGNS_COLORS_MAP;
