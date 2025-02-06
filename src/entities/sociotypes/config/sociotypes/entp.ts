import type { SociotypeDataType } from "@types";

const ENTP: SociotypeDataType = {
  id: "ENTP",
  quadra: "air",
  role: "knight",
  alias: "Дон Кихот",
  mindKey: "irrational-1",
  mindset: "causal",
  name: "Новатор",
  typeName: "innovator",
  gender: "male",
  club: "researcher",
  tarot: "swords", // масть
  psychotype: "childlike", // группа
  populationPercentage: "2 ~ 5%",
  socionicAbbrevation: "ИЛЭ",
  personalitiesTerm: "Debater",
  aspects: {
    lives: "ideas",
    creates: "logic",
    mad: "time",
    does: "business",
    afraid: "will",
    suffers: "people",
    desires: "comfort",
    likes: "emotions",
  },
  stimulant: "uniqueness",
  communication: "business",
  companion: "categorical",
  temperament: "sanguine",
  alignment: "chaoticNeutral",
  yungs: ["irrational", "intuit", "logic", "extravert"],
  reinin: [
    "static",
    "positivist",
    "questim",
    "tactician",
    "constructivist",

    "process",
    "compliant",
    "careless",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ISFP",
      activity: "ESFJ",
      mirror: "INTJ",
      identical: "ENTP",
    },

    favorable: {
      kindred: "ENFP",
      semidual: "ISTP",
      pragmatic: "ESTP",
      illusionary: "INFP",
    },

    neutral: {
      beneficiary: "ENFJ",
      giver: "ESTJ",
      supervisor: "ISTJ",
      underling: "INFJ",
    },

    unfavorable: {
      quasidentical: "ENTJ",
      parallel: "ISFJ",
      contrary: "INTP",
      superego: "ESFP",
    },
  },
};

export default ENTP;
