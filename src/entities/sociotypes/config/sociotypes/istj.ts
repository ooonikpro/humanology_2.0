import type { SociotypeDataType } from "@types";

const ISTJ: SociotypeDataType = {
  id: "ISTJ",
  quadra: "fire",
  role: "lady",
  alias: "Максим Горький",
  mindKey: "rational-4",
  mindset: "causal",
  name: "Инспектор",
  typeName: "inspector",
  gender: "male",
  club: "pragmatist",
  tarot: "pentacles", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "11 ~ 14%",
  functions: {
    base: "logic",
    creative: "will",
    limit: "business",
    back: "comfort",
    pain: "ideas",
    role: "people",
    activate: "time",
    suggestive: "emotions",
  },
  stimulant: "wealth",
  communication: "coldBlooded",
  companion: "sensitive",
  temperament: "phlegmatic",
  alignment: "lawfulNeutral",
  yungs: ["rational", "sensory", "logic", "introvert"],
  reinin: [
    "static",
    "positivist",
    "declatim",
    "tactician",
    "emotivist",

    "result",
    "stubborn",
    "careless",

    "decisive",
    "subjective",
    "aristocrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ENFJ",
      activity: "INFP",
      mirror: "ESTP",
      identical: "ISTJ",
    },

    favorable: {
      kindred: "INTJ",
      semidual: "ESFJ",
      pragmatic: "ISFJ",
      illusionary: "ENTJ",
    },

    neutral: {
      beneficiary: "INTP",
      giver: "ISFP",
      supervisor: "ESFP",
      underling: "ENTP",
    },

    unfavorable: {
      quasidentical: "ISTP",
      parallel: "ENFP",
      contrary: "ESTJ",
      superego: "INFJ",
    },
  },
  socionicAbbrevation: "ЛСИ",
  personalitiesTerm: "Logistician",
};

export default ISTJ;
