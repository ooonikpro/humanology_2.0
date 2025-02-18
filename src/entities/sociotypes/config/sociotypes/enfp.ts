import type { SociotypeDataType } from "@types";

const ENFP: SociotypeDataType = {
  id: "ENFP",
  quadra: "earth",
  role: "knight",
  alias: "Гексли",
  mindKey: "irrational-1",
  mindset: "holographic",
  name: "Советчик",
  typeName: "adviser",
  gender: "female",
  club: "humanitarian",
  tarot: "cups", // масть
  psychotype: "childlike", // группа
  populationPercentage: "6 ~ 8%",
  functions: {
    base: "ideas",
    creative: "people",
    limit: "time",
    back: "emotions",
    role: "will",
    pain: "logic",
    suggestive: "comfort",
    activate: "business",
  },
  stimulant: "uniqueness",
  communication: "passionate",
  companion: "uncompromising",
  temperament: "sanguine",
  alignment: "chaoticGood",
  yungs: ["irrational", "intuit", "ethic", "extravert"],
  reinin: [
    "static",
    "negativist",
    "declatim",
    "tactician",
    "emotivist",

    "result",
    "stubborn",
    "careless",

    "reasonable",
    "objective",
    "aristocrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ISTP",
      activity: "ESTJ",
      mirror: "INFJ",
      identical: "ENFP",
    },

    favorable: {
      kindred: "ENTP",
      semidual: "ISFP",
      pragmatic: "ESFP",
      illusionary: "INTP",
    },

    neutral: {
      beneficiary: "ENTJ",
      giver: "ESFJ",
      supervisor: "ISFJ",
      underling: "INTJ",
    },

    unfavorable: {
      quasidentical: "ENFJ",
      parallel: "ISTJ",
      contrary: "INFP",
      superego: "ESTP",
    },
  },
  socionicAbbrevation: "ИЭЭ",
  personalitiesTerm: "Campaigner",
};

export default ENFP;
