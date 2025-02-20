import type { SociotypeDataType } from "@types";

const ESTP: SociotypeDataType = {
  id: "ESTP",
  quadra: "fire",
  role: "king",
  alias: "Маршал Жуков",
  mindKey: "irrational-1",
  mindset: "vortical",
  name: "Лидер",
  typeName: "leader",
  gender: "male",
  club: "pragmatist",
  tarot: "swords", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "4 ~ 5%",
  functions: {
    base: {
      variant: "intensive",
      aspect: "will",
    },
    creative: {
      variant: "intensive",
      aspect: "logic",
    },
    limit: {
      variant: "intensive",
      aspect: "comfort",
    },
    back: {
      variant: "intensive",
      aspect: "business",
    },
    pain: {
      variant: "intensive",
      aspect: "people",
    },
    role: {
      variant: "intensive",
      aspect: "ideas",
    },
    activate: {
      variant: "intensive",
      aspect: "emotions",
    },
    suggestive: {
      variant: "intensive",
      aspect: "time",
    },
  },
  stimulant: "status",
  communication: "business",
  companion: "volitional",
  temperament: "sanguine",
  alignment: "chaoticEvil",
  yungs: ["irrational", "sensory", "logic", "extravert"],
  reinin: [
    "static",
    "negativist",
    "declatim",
    "strategist",
    "constructivist",

    "result",
    "compliant",
    "provident",

    "decisive",
    "subjective",
    "aristocrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "INFP",
      activity: "ENFJ",
      mirror: "ISTJ",
      identical: "ESTP",
    },

    favorable: {
      kindred: "ESFP",
      semidual: "INTP",
      pragmatic: "ENTP",
      illusionary: "ISFP",
    },

    neutral: {
      beneficiary: "ESFJ",
      giver: "ENTJ",
      supervisor: "INTJ",
      underling: "ISFJ",
    },

    unfavorable: {
      quasidentical: "ESTJ",
      parallel: "INFJ",
      contrary: "ISTP",
      superego: "ENFP",
    },
  },
  socionicAbbrevation: "СЛЭ",
  personalitiesTerm: "Enterpreneur",
};

export default ESTP;
