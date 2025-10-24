import type { ClubIdType, PsychotypeIdType } from "@types";

export * from "./clubs";
export * from "./psychotypes";

export { default as DETAIL_CLUBS } from "./detail-clubs";
export { default as DETAIL_PSYCHOTYPES } from "./detail-psychotypes";

export const CLUBS_ORDER: Array<ClubIdType> = [
  "social",
  "humanitarian",
  "pragmatist",
  "researcher",
];

export const PSYCHOTYPES_ORDER: Array<PsychotypeIdType> = [
  "victim",
  "childlike",
  "caring",
  "aggressor",
];
