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
  functions: {
    base: {
      variant: "intensive",
      aspect: "business",
    },
    creative: {
      variant: "extensive",
      aspect: "time",
    },
    limit: {
      variant: "extensive",
      aspect: "logic",
    },
    back: {
      variant: "intensive",
      aspect: "ideas",
    },
    role: {
      variant: "intensive",
      aspect: "emotions",
    },
    pain: {
      variant: "extensive",
      aspect: "comfort",
    },
    suggestive: {
      variant: "extensive",
      aspect: "people",
    },
    activate: {
      variant: "intensive",
      aspect: "will",
    },
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
    dual: "ISFJ",
    activity: "ESFP",
    mirror: "INTP",
    identical: "ENTJ",
    kindred: "ESTJ",
    semidual: "INFJ",
    pragmatic: "ENFJ",
    illusionary: "ISTJ",
    beneficiary: "ESTP",
    giver: "ENFP",
    supervisor: "INFP",
    underling: "ISTP",
    quasidentical: "ENTP",
    parallel: "ISFP",
    contrary: "INTJ",
    superego: "ESFJ",
  },
  socionicAbbrevation: "ЛИЭ",
  personalitiesTerm: "Commander",
};

export default ENTJ;
