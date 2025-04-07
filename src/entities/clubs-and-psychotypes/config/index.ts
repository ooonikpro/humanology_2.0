import type { ClubIdType, PsychotypeIdType } from "@types";

export * from "./clubs";
export * from "./psychotypes";

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
