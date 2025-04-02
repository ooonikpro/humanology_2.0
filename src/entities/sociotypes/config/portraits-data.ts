import type { Gender, SociotypeAgeType, SociotypeIdType } from "@types";

export const KIDS: [
  SociotypeIdType,
  Gender,
  Extract<SociotypeAgeType, "kid">,
][][] = [
  [
    ["ENTP", "female", "kid"],
    ["INTJ", "male", "kid"],
    ["ESFJ", "female", "kid"],
  ],
  [
    ["ENFP", "female", "kid"],
    ["ESTJ", "male", "kid"],
    ["INFJ", "female", "kid"],
  ],
  [
    ["INTP", "female", "kid"],
    ["ESFP", "female", "kid"],
    ["ENTJ", "male", "kid"],
  ],
  [
    ["ENFJ", "female", "kid"],
    ["ESTP", "male", "kid"],
    ["INFP", "female", "kid"],
  ],
];

export const YOUNGS: [
  SociotypeIdType,
  Gender,
  Extract<SociotypeAgeType, "young">,
][][] = [
  [
    ["ENTP", "female", "young"],
    ["INTJ", "male", "young"],
    ["ESFJ", "female", "young"],
  ],
  [
    ["ENFP", "female", "young"],
    ["ESTJ", "male", "young"],
    ["INFJ", "female", "young"],
  ],
  [
    ["INTP", "female", "young"],
    ["ESFP", "female", "young"],
    ["ENTJ", "male", "young"],
  ],
  [
    ["ENFJ", "female", "young"],
    ["ESTP", "male", "young"],
    ["INFP", "female", "young"],
  ],
];
