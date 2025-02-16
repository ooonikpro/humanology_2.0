import type { SociotypeDataType } from "@types";

const ENTJ: SociotypeDataType = {
  id: "ENTJ",
  quadra: "water",
  role: "knight",
  alias: "Джек Лондон",
  mindKey: "rational-1",
  mindset: "vortical",
  name: "Предприниматель",
  typeName: "businessman",
  gender: "male",
  club: "researcher",
  tarot: "pentacles", // масть
  psychotype: "victim", // группа
  populationPercentage: "2 ~ 5%",
  aspects: {
    lives: "business",
    creates: "time",
    mad: "logic",
    does: "ideas",
    afraid: "emotions",
    suffers: "comfort",
    desires: "people",
    likes: "will",
  },
  stimulant: "uniqueness",
  communication: "business",
  companion: "stubborn",
  temperament: "choleric",
  alignment: "lawfulEvil",
  yungs: ["rational", "intuit", "logic", "extravert"],
  reinin: [
    "dynamic",
    "positivist",
    "declatim",
    "strategist",
    "emotivist",

    "result",
    "compliant",
    "careless",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ISFJ",
      activity: "ESFP",
      mirror: "INTP",
      identical: "ENTJ",
    },

    favorable: {
      kindred: "ESTJ",
      semidual: "INFJ",
      pragmatic: "ENFJ",
      illusionary: "ISTJ",
    },

    neutral: {
      beneficiary: "ESTP",
      giver: "ENFP",
      supervisor: "INFP",
      underling: "ISTP",
    },

    unfavorable: {
      quasidentical: "ENTP",
      parallel: "ISFP",
      contrary: "INTJ",
      superego: "ESFJ",
    },
  },
  socionicAbbrevation: "ЛИЭ",
  personalitiesTerm: "Commander",
};

export default ENTJ;
