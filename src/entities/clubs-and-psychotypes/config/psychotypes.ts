import type { PsychotypeDataType, PsychotypeIdType } from "@types";

import aggressor from "./psychotypes/aggressor";
import caring from "./psychotypes/caring";
import childlike from "./psychotypes/childlike";
import victim from "./psychotypes/victim";

export const PSYCHOTYPES: Record<PsychotypeIdType, PsychotypeDataType> = {
  aggressor,
  caring,
  childlike,
  victim,
} as const;
