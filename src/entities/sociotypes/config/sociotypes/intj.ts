import type { SociotypeDataType } from "@types";

const INTJ: SociotypeDataType = {
  id: "INTJ",
  quadra: "air",
  role: "page",
  alias: "Робеспьер",
  mindKey: "rational-1",
  mindset: "holographic",
  name: "Аналитик",
  typeName: "analytic",
  gender: "male",
  club: "researcher",
  tarot: "pentacles", // масть
  psychotype: "childlike", // группа
  populationPercentage: "2 ~ 4%",
  functions: {
    base: "logic",
    creative: "ideas",
    limit: "business",
    back: "time",
    pain: "will",
    role: "people",
    activate: "comfort",
    suggestive: "emotions",
  },
  stimulant: "selfSufficiency",
  communication: "coldBlooded",
  companion: "restrained",
  temperament: "phlegmatic",
  alignment: "trueNeutral",
  yungs: ["rational", "intuit", "logic", "introvert"],
  reinin: [
    "static",
    "negativist",
    "questim",
    "strategist",
    "emotivist",

    "result",
    "stubborn",
    "provident",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ESFJ",
      activity: "ISFP",
      mirror: "ENTP",
      identical: "INTJ",
    },

    favorable: {
      kindred: "ISTJ",
      semidual: "ENFJ",
      pragmatic: "INFJ",
      illusionary: "ESTJ",
    },

    neutral: {
      beneficiary: "ISTP",
      giver: "INFP",
      supervisor: "ENFP",
      underling: "ESTP",
    },

    unfavorable: {
      quasidentical: "INTP",
      parallel: "ESFP",
      contrary: "ENTJ",
      superego: "ISFJ",
    },
  },
  socionicAbbrevation: "ЛИИ",
  personalitiesTerm: "Architect",
};

export default INTJ;
