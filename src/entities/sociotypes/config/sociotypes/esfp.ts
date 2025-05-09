import type { SociotypeDataType } from "@types";

const ESFP: SociotypeDataType = {
  id: "ESFP",
  quadra: "water",
  role: "queen",
  alias: "Наполеон",
  mindKey: "irrational-2",
  mindset: "causal",
  name: "Политик",
  typeName: "politic",
  gender: "female",
  club: "social",
  tarot: "cups", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "4 ~ 9%",
  functions: {
    base: {
      variant: "extensive",
      aspect: "will",
    },
    creative: {
      variant: "intensive",
      aspect: "people",
    },
    limit: {
      variant: "intensive",
      aspect: "comfort",
    },
    back: {
      variant: "extensive",
      aspect: "emotions",
    },
    role: {
      variant: "extensive",
      aspect: "ideas",
    },
    pain: {
      variant: "intensive",
      aspect: "logic",
    },
    suggestive: {
      variant: "intensive",
      aspect: "time",
    },
    activate: {
      variant: "extensive",
      aspect: "business",
    },
  },
  stimulant: "status",
  communication: "passionate",
  companion: "volitional",
  temperament: "sanguine",
  alignment: "chaoticNeutral",
  yungs: ["irrational", "sensory", "ethic", "extravert"],
  reinin: [
    "static",
    "positivist",
    "questim",
    "strategist",
    "emotivist",

    "process",
    "stubborn",
    "provident",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "INTP",
    activity: "ENTJ",
    mirror: "ISFJ",
    identical: "ESFP",
    kindred: "ESTP",
    semidual: "INFP",
    pragmatic: "ENFP",
    illusionary: "ISTP",
    beneficiary: "ESTJ",
    giver: "ENFJ",
    supervisor: "INFJ",
    underling: "ISTJ",
    quasidentical: "ESFJ",
    parallel: "INTJ",
    contrary: "ISFP",
    superego: "ENTP",
  },
  socionicAbbrevation: "СЭЭ",
  personalitiesTerm: "Entertainer",
};

export default ESFP;
