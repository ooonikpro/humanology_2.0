import type { DichotomyType, SociotypeIdType } from "@types";

type Key =
  `${Extract<DichotomyType, "rational" | "irrational">}-${Extract<DichotomyType, "logic" | "ethic">}-${Extract<DichotomyType, "sensory" | "intuit">}-${Extract<DichotomyType, "extravert" | "introvert">}`;
export const typeMap = {
  "rational-logic-sensory-extravert": "ESTJ",
  "rational-logic-sensory-introvert": "ISTJ",
  "rational-logic-intuit-extravert": "ENTJ",
  "rational-logic-intuit-introvert": "INTJ",
  "rational-ethic-sensory-extravert": "ESFJ",
  "rational-ethic-sensory-introvert": "ISFJ",
  "rational-ethic-intuit-extravert": "ENFJ",
  "rational-ethic-intuit-introvert": "INFJ",
  "irrational-logic-sensory-extravert": "ESTP",
  "irrational-logic-sensory-introvert": "ISTP",
  "irrational-logic-intuit-extravert": "ENTP",
  "irrational-logic-intuit-introvert": "INTP",
  "irrational-ethic-sensory-extravert": "ESFP",
  "irrational-ethic-sensory-introvert": "ISFP",
  "irrational-ethic-intuit-extravert": "ENFP",
  "irrational-ethic-intuit-introvert": "INFP",
} as const satisfies Record<Key, SociotypeIdType>;
