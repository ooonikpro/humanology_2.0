import type { SociotypeDataType } from "@types";

const ESTJ: SociotypeDataType = {
  id: "ESTJ",
  quadra: "earth",
  role: "king",
  alias: "Штирлиц",
  mindKey: "rational-4",
  mindset: "algorithmic",
  name: "Администратор",
  typeName: "administrator",
  gender: "male",
  club: "pragmatist",
  tarot: "pentacles",
  psychotype: "caring",
  populationPercentage: "8 ~ 12%",
  aspects: {
    lives: "business",
    creates: "comfort",
    mad: "logic",
    does: "will",
    afraid: "emotions",
    suffers: "time",
    desires: "people",
    likes: "ideas",
  },
  stimulant: "status",
  communication: "business",
  companion: "stubborn",
  temperament: "choleric",
  alignment: "lawfulEvil",
  yungs: ["rational", "sensory", "logic", "extravert"],
  reinin: [
    "dynamic",
    "negativist",
    "questim",
    "tactician",
    "emotivist",

    "process",
    "compliant",
    "provident",

    "reasonable",
    "objective",
    "aristocrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "INFJ",
      activity: "ENFP",
      mirror: "ISTP",
      identical: "ESTJ",
    },

    favorable: {
      kindred: "ENTJ",
      semidual: "ISFJ",
      pragmatic: "ESFJ",
      illusionary: "INTJ",
    },

    neutral: {
      beneficiary: "ISFP",
      giver: "ESFP",
      supervisor: "ENTP",
      underling: "INTP",
    },

    unfavorable: {
      quasidentical: "ESTP",
      parallel: "INFP",
      contrary: "ISTJ",
      superego: "ENFJ",
    },
  },
  socionicAbbrevation: "ЛСЭ",
  personalitiesTerm: "Executive",
};

export default ESTJ;
