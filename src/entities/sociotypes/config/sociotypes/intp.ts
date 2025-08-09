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
    base: {
      variant: "extensive",
      aspect: "time",
    },
    creative: {
      variant: "intensive",
      aspect: "business",
    },
    limit: {
      variant: "intensive",
      aspect: "ideas",
    },
    back: {
      variant: "extensive",
      aspect: "logic",
    },
    role: {
      variant: "extensive",
      aspect: "comfort",
    },
    pain: {
      variant: "intensive",
      aspect: "emotions",
    },
    suggestive: {
      variant: "intensive",
      aspect: "will",
    },
    activate: {
      variant: "extensive",
      aspect: "people",
    },
  },
  stimulant: "selfSufficiency",
  communication: "coldBlooded",
  companion: "provident",
  temperament: "melancholic",
  alignment: "neutralEvil",
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
    dual: "ESFP",
    activity: "ISFJ",
    mirror: "ENTJ",
    identical: "INTP",
    kindred: "INFP",
    semidual: "ESTP",
    pragmatic: "ISTP",
    illusionary: "ENFP",
    beneficiary: "INFJ",
    giver: "ISTJ",
    supervisor: "ESTJ",
    underling: "ENFJ",
    quasidentical: "INTJ",
    parallel: "ESFJ",
    contrary: "ENTP",
    superego: "ISFP",
  },
  socionicAbbrevation: "ИЛИ",
  personalitiesTerm: "Logician",
};

export default INTP;
