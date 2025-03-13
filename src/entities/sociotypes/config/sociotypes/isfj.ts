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
    base: {
      variant: "intensive",
      aspect: "people",
    },
    creative: {
      variant: "extensive",
      aspect: "will",
    },
    limit: {
      variant: "extensive",
      aspect: "emotions",
    },
    back: {
      variant: "intensive",
      aspect: "comfort",
    },
    role: {
      variant: "intensive",
      aspect: "logic",
    },
    pain: {
      variant: "extensive",
      aspect: "ideas",
    },
    suggestive: {
      variant: "extensive",
      aspect: "business",
    },
    activate: {
      variant: "intensive",
      aspect: "time",
    },
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
    dual: "ENTJ",
    activity: "INTP",
    mirror: "ESFP",
    identical: "ISFJ",
    kindred: "INFJ",
    semidual: "ESTJ",
    pragmatic: "ISTJ",
    illusionary: "ENFJ",
    beneficiary: "INFP",
    giver: "ISTP",
    supervisor: "ESTP",
    underling: "ENFP",
    quasidentical: "ISFP",
    parallel: "ENTP",
    contrary: "ESFJ",
    superego: "INTJ",
  },
  socionicAbbrevation: "ЭСИ",
  personalitiesTerm: "Defender",
};

export default ISFJ;
