import type { SociotypeDataType } from "@types";

const ESFJ: SociotypeDataType = {
  id: "ESFJ",
  quadra: "air",
  role: "queen",
  alias: "Гюго",
  mindKey: "rational-4",
  mindset: "vortical",
  name: "Энтузиаст",
  typeName: "enthusiast",
  gender: "female",
  club: "social",
  tarot: "wands", // масть
  psychotype: "caring", // группа
  populationPercentage: "9 ~ 13%",
  functions: {
    base: "emotions",
    creative: "comfort",
    limit: "people",
    back: "will",
    pain: "time",
    role: "business",
    activate: "ideas",
    suggestive: "logic",
  },
  stimulant: "status",
  communication: "passionate",
  companion: "uncompromising",
  temperament: "choleric",
  alignment: "lawfulGood",
  yungs: ["rational", "sensory", "ethic", "extravert"],
  reinin: [
    "dynamic",
    "positivist",
    "declatim",
    "tactician",
    "constructivist",

    "result",
    "stubborn",
    "provident",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "INTJ",
      activity: "ENTP",
      mirror: "ISFP",
      identical: "ESFJ",
    },

    favorable: {
      kindred: "ENFJ",
      semidual: "ISTJ",
      pragmatic: "ESTJ",
      illusionary: "INFJ",
    },

    neutral: {
      beneficiary: "ENFP",
      giver: "ESTP",
      supervisor: "ISTP",
      underling: "INFP",
    },

    unfavorable: {
      quasidentical: "ESFP",
      parallel: "INTP",
      contrary: "ISFJ",
      superego: "ENTJ",
    },
  },
  socionicAbbrevation: "ЭСЭ",
  personalitiesTerm: "Consul",
};

export default ESFJ;
