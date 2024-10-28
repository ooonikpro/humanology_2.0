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
  ISTJ,
  ENFJ,
  INFP,
  ESTP,
  INTP,
  ESFP,
  ISFJ,
  ENTJ,
  ESTJ,
  INFJ,
  ENFP,
  ISTP,
};

export { default as ROLES } from "./roles";
export * from "./quadras";
export { default as TAROT } from "./tarot";
export { default as PSYCHOTYPES } from "./psychotypes";
export { default as CLUBS } from "./clubs";
export { default as YUNGS_DICHTOMIES } from "./yungsDichotomies";
