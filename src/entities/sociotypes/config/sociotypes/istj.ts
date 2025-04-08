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
    base: {
      variant: "extensive",
      aspect: "logic",
    },
    creative: {
      variant: "intensive",
      aspect: "will",
    },
    limit: {
      variant: "intensive",
      aspect: "business",
    },
    back: {
      variant: "extensive",
      aspect: "comfort",
    },
    pain: {
      variant: "intensive",
      aspect: "ideas",
    },
    role: {
      variant: "extensive",
      aspect: "people",
    },
    activate: {
      variant: "extensive",
      aspect: "time",
    },
    suggestive: {
      variant: "intensive",
      aspect: "emotions",
    },
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
    dual: "ENFJ",
    activity: "INFP",
    mirror: "ESTP",
    identical: "ISTJ",
    kindred: "INTJ",
    semidual: "ESFJ",
    pragmatic: "ISFJ",
    illusionary: "ENTJ",
    beneficiary: "INTP",
    giver: "ISFP",
    supervisor: "ESFP",
    underling: "ENTP",
    quasidentical: "ISTP",
    parallel: "ENFP",
    contrary: "ESTJ",
    superego: "INFJ",
  },
  socionicAbbrevation: "ЛСИ",
  personalitiesTerm: "Logistician",
};

export default ISTJ;
