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
    base: "comfort",
    creative: "emotions",
    limit: "will",
    back: "people",
    pain: "business",
    role: "time",
    activate: "logic",
    suggestive: "ideas",
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
    quadral: {
      dual: "ENTP",
      activity: "INTJ",
      mirror: "ESFJ",
      identical: "ISFP",
    },

    favorable: {
      kindred: "ISTP",
      semidual: "ENFP",
      pragmatic: "INFP",
      illusionary: "ESTP",
    },

    neutral: {
      beneficiary: "ISTJ",
      giver: "INFJ",
      supervisor: "ENFJ",
      underling: "ESTJ",
    },

    unfavorable: {
      quasidentical: "ISFJ",
      parallel: "ENTJ",
      contrary: "ESFP",
      superego: "INTP",
    },
  },
  socionicAbbrevation: "СЭИ",
  personalitiesTerm: "Adventurer",
};

export default ISFP;
