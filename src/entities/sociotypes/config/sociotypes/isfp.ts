import type { SociotypeDataType } from "@types";

const ISFP: SociotypeDataType = {
  id: "ISFP",
  quadra: "air",
  role: "lady",
  alias: "Дюма",
  mindKey: "irrational-2",
  mindset: "algorithmic",
  name: "Дипломат",
  typeName: "diplomat",
  gender: "female",
  club: "social",
  tarot: "cups", // масть
  psychotype: "caring", // группа
  populationPercentage: "5 ~ 9%",
  functions: {
    base: {
      variant: "extensive",
      aspect: "comfort",
    },
    creative: {
      variant: "intensive",
      aspect: "emotions",
    },
    limit: {
      variant: "intensive",
      aspect: "will",
    },
    back: {
      variant: "extensive",
      aspect: "people",
    },
    pain: {
      variant: "intensive",
      aspect: "business",
    },
    role: {
      variant: "extensive",
      aspect: "time",
    },
    activate: {
      variant: "extensive",
      aspect: "logic",
    },
    suggestive: {
      variant: "intensive",
      aspect: "ideas",
    },
  },
  stimulant: "wealth",
  communication: "sincere",
  companion: "sensitive",
  temperament: "melancholic",
  alignment: "chaoticGood",
  yungs: ["irrational", "sensory", "ethic", "introvert"],
  reinin: [
    "dynamic",
    "negativist",
    "declatim",
    "strategist",
    "emotivist",

    "result",
    "compliant",
    "careless",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "ENTP",
    activity: "INTJ",
    mirror: "ESFJ",
    identical: "ISFP",
    kindred: "ISTP",
    semidual: "ENFP",
    pragmatic: "INFP",
    illusionary: "ESTP",
    beneficiary: "ISTJ",
    giver: "INFJ",
    supervisor: "ENFJ",
    underling: "ESTJ",
    quasidentical: "ISFJ",
    parallel: "ENTJ",
    contrary: "ESFP",
    superego: "INTP",
  },
  socionicAbbrevation: "СЭИ",
  personalitiesTerm: "Adventurer",
};

export default ISFP;
