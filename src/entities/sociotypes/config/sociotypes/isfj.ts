import type { SociotypeDataType } from "@types";

const ISFJ: SociotypeDataType = {
  id: "ISFJ",
  quadra: "water",
  role: "lady",
  alias: "Драйзер",
  mindKey: "rational-4",
  mindset: "holographic",
  name: "Хранитель",
  typeName: "guardian",
  gender: "female",
  club: "social",
  tarot: "wands", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "9 ~ 14%",
  functions: {
    base: "people",
    creative: "will",
    limit: "emotions",
    back: "comfort",
    role: "logic",
    pain: "ideas",
    suggestive: "business",
    activate: "time",
  },
  stimulant: "wealth",
  communication: "sincere",
  companion: "sensitive",
  temperament: "phlegmatic",
  alignment: "lawfulGood",
  yungs: ["rational", "sensory", "ethic", "introvert"],
  reinin: [
    "static",
    "negativist",
    "questim",
    "tactician",
    "constructivist",

    "result",
    "compliant",
    "provident",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ENTJ",
      activity: "INTP",
      mirror: "ESFP",
      identical: "ISFJ",
    },

    favorable: {
      kindred: "INFJ",
      semidual: "ESTJ",
      pragmatic: "ISTJ",
      illusionary: "ENFJ",
    },

    neutral: {
      beneficiary: "INFP",
      giver: "ISTP",
      supervisor: "ESTP",
      underling: "ENFP",
    },

    unfavorable: {
      quasidentical: "ISFP",
      parallel: "ENTP",
      contrary: "ESFJ",
      superego: "INTJ",
    },
  },
  socionicAbbrevation: "ЭСИ",
  personalitiesTerm: "Defender",
};

export default ISFJ;
