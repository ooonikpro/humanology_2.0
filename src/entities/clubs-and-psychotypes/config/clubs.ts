import type { ClubDataType, ClubIdType } from "@types";

import social from "./clubs/social";
import researcher from "./clubs/researcher";
import pragmatist from "./clubs/pragmatist";
import humanitarian from "./clubs/humanitarian";

export const CLUBS: Record<ClubIdType, ClubDataType> = {
  humanitarian,
  pragmatist,
  researcher,
  social,
} as const;
