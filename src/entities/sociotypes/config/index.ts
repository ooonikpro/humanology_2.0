import type { SociotypeDataType, SociotypeIdType } from "@types";

import ENTP from "./sociotypes/entp";
import ISFP from "./sociotypes/isfp";
import ESFJ from "./sociotypes/esfj";
import INTJ from "./sociotypes/intj";
import ISTJ from "./sociotypes/istj";
import ENFJ from "./sociotypes/enfj";
import INFP from "./sociotypes/infp";
import ESTP from "./sociotypes/estp";
import INTP from "./sociotypes/intp";
import ESFP from "./sociotypes/esfp";
import ISFJ from "./sociotypes/isfj";
import ENTJ from "./sociotypes/entj";
import ESTJ from "./sociotypes/estj";
import INFJ from "./sociotypes/infj";
import ENFP from "./sociotypes/enfp";
import ISTP from "./sociotypes/istp";

export const SOCIOTYPES: Record<SociotypeIdType, SociotypeDataType> = {
  ENTP,
  ISFP,
  ESFJ,
  INTJ,
  ENFJ,
  ISTJ,
  ESTP,
  INFP,
  ENTJ,
  ISFJ,
  ESFP,
  INTP,
  ENFP,
  ISTP,
  ESTJ,
  INFJ,
};

export * from "./alignment";
export * from "./companion";
export * from "./communicationStyle";
export * from "./motivation";
export * from "./mindset";
export * from "./temperament";
export * from "./quadras";
export * from "./yungsDichotomies";
export * from "./reininSigns";
export * from "./portraits-data";
export * from "./pageTabs";

export { default as ROLES } from "./roles";
export { default as TAROT } from "./tarot";
export { default as SIGNS_COLORS_MAP } from "./signsColorsMap";
