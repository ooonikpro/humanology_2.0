import type { SociotypeDataType } from "@types";

const ESFJ: SociotypeDataType = {
  id: "ESFJ",
  quadra: "air",
  role: "queen",
  alias: "Гюго",
  mindKey: "rational-4",
  mindset: "vortical",
  name: "Энтузиаст",
  typeName: "enthusiast",
  gender: "female",
  club: "social",
  tarot: "wands", // масть
  psychotype: "caring", // группа
  populationPercentage: "9 ~ 13%",
  functions: {
    base: {
      variant: "intensive",
      aspect: "emotions",
    },
    creative: {
      variant: "extensive",
      aspect: "comfort",
    },
    limit: {
      variant: "extensive",
      aspect: "people",
    },
    back: {
      variant: "intensive",
      aspect: "will",
    },
    pain: {
      variant: "extensive",
      aspect: "time",
    },
    role: {
      variant: "intensive",
      aspect: "business",
    },
    activate: {
      variant: "intensive",
      aspect: "ideas",
    },
    suggestive: {
      variant: "extensive",
      aspect: "logic",
    },
  },
  stimulant: "status",
  communication: "passionate",
  companion: "uncompromising",
  temperament: "choleric",
  alignment: "lawfulGood",
  yungs: ["rational", "sensory", "ethic", "extravert"],
  reinin: [
    "dynamic",
    "positivist",
    "declatim",
    "tactician",
    "constructivist",

    "result",
    "stubborn",
    "provident",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "INTJ",
    activity: "ENTP",
    mirror: "ISFP",
    identical: "ESFJ",
    kindred: "ENFJ",
    semidual: "ISTJ",
    pragmatic: "ESTJ",
    illusionary: "INFJ",
    beneficiary: "ENFP",
    giver: "ESTP",
    supervisor: "ISTP",
    underling: "INFP",
    quasidentical: "ESFP",
    parallel: "INTP",
    contrary: "ISFJ",
    superego: "ENTJ",
  },
  socionicAbbrevation: "ЭСЭ",
  personalitiesTerm: "Consul",
};

export default ESFJ;
