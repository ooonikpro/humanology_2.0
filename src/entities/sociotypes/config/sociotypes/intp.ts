import type { SociotypeDataType } from "@types";

const INTP: SociotypeDataType = {
  id: "INTP",
  quadra: "water",
  role: "page",
  alias: "Бальзак",
  mindKey: "irrational-1",
  mindset: "algorithmic",
  name: "Критик",
  typeName: "critic",
  gender: "male",
  club: "researcher",
  tarot: "swords", // масть
  psychotype: "victim", // группа
  populationPercentage: "3 ~ 5%",
  functions: {
    base: "time",
    creative: "business",
    limit: "ideas",
    back: "logic",
    role: "comfort",
    pain: "emotions",
    suggestive: "will",
    activate: "people",
  },
  stimulant: "selfSufficiency",
  communication: "coldBlooded",
  companion: "provident",
  temperament: "melancholic",
  alignment: "trueNeutral",
  yungs: ["irrational", "intuit", "logic", "introvert"],
  reinin: [
    "dynamic",
    "negativist",
    "declatim",
    "tactician",
    "constructivist",

    "process",
    "stubborn",
    "provident",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ESFP",
      activity: "ISFJ",
      mirror: "ENTJ",
      identical: "INTP",
    },

    favorable: {
      kindred: "INFP",
      semidual: "ESTP",
      pragmatic: "ISTP",
      illusionary: "ENFP",
    },

    neutral: {
      beneficiary: "INFJ",
      giver: "ISTJ",
      supervisor: "ESTJ",
      underling: "ENFJ",
    },

    unfavorable: {
      quasidentical: "INTJ",
      parallel: "ESFJ",
      contrary: "ENTP",
      superego: "ISFP",
    },
  },
  socionicAbbrevation: "ИЛИ",
  personalitiesTerm: "Logician",
};

export default INTP;
