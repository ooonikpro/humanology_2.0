import type { SociotypeDataType } from "@types";

const ESFP: SociotypeDataType = {
  id: "ESFP",
  quadra: "water",
  role: "queen",
  alias: "Наполеон",
  mindKey: "irrational-2",
  mindset: "causal",
  name: "Политик",
  typeName: "politic",
  gender: "female",
  club: "social",
  tarot: "cups", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "4 ~ 9%",
  aspects: {
    lives: "will",
    creates: "people",
    mad: "comfort",
    does: "emotions",
    afraid: "ideas",
    suffers: "logic",
    desires: "time",
    likes: "business",
  },
  stimulant: "status",
  communication: "passionate",
  companion: "volitional",
  temperament: "sanguine",
  alignment: "chaoticGood",
  yungs: ["irrational", "sensory", "ethic", "extravert"],
  reinin: [
    "static",
    "positivist",
    "questim",
    "strategist",
    "emotivist",

    "process",
    "stubborn",
    "provident",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "INTP",
      activity: "ENTJ",
      mirror: "ISFJ",
      identical: "ESFP",
    },

    favorable: {
      kindred: "ESTP",
      semidual: "INFP",
      pragmatic: "ENFP",
      illusionary: "ISTP",
    },

    neutral: {
      beneficiary: "ESTJ",
      giver: "ENFJ",
      supervisor: "INFJ",
      underling: "ISTJ",
    },

    unfavorable: {
      quasidentical: "ESFJ",
      parallel: "INTJ",
      contrary: "ISFP",
      superego: "ENTP",
    },
  },
  socionicAbbrevation: "СЭЭ",
  personalitiesTerm: "Entertainer",
};

export default ESFP;
