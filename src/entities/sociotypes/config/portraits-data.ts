import type { Gender, SociotypeAgeType, SociotypeIdType } from "@types";

export const KIDS: ([SociotypeIdType, Gender?, SociotypeAgeType?][])[] = [
  [["ENTP", "female"], ["ESFJ", "female"], ["INTJ"]],
  [["ENFP", "female"], ["ESTJ"], ["INFJ", "female"]],
  [["ENTJ"], ["ESFP", "female"], ["INTP", "female"]],
  [["ENFJ", "female"], ["ESTP"], ["INFP", "female"]],
];
