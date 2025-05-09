import type { SociotypeDataType } from "@types";

const INTJ: SociotypeDataType = {
  id: "INTJ",
  quadra: "air",
  role: "page",
  alias: "Робеспьер",
  mindKey: "rational-1",
  mindset: "holographic",
  name: "Аналитик",
  typeName: "analytic",
  gender: "male",
  club: "researcher",
  tarot: "pentacles", // масть
  psychotype: "childlike", // группа
  populationPercentage: "2 ~ 4%",
  functions: {
    base: {
      variant: "intensive",
      aspect: "logic",
    },
    creative: {
      variant: "intensive",
      aspect: "ideas",
    },
    limit: {
      variant: "extensive",
      aspect: "business",
    },
    back: {
      variant: "intensive",
      aspect: "time",
    },
    pain: {
      variant: "extensive",
      aspect: "will",
    },
    role: {
      variant: "intensive",
      aspect: "people",
    },
    activate: {
      variant: "intensive",
      aspect: "comfort",
    },
    suggestive: {
      variant: "extensive",
      aspect: "emotions",
    },
  },
  stimulant: "selfSufficiency",
  communication: "coldBlooded",
  companion: "restrained",
  temperament: "phlegmatic",
  alignment: "neutralEvil",
  yungs: ["rational", "intuit", "logic", "introvert"],
  reinin: [
    "static",
    "negativist",
    "questim",
    "strategist",
    "emotivist",

    "result",
    "stubborn",
    "provident",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "ESFJ",
    activity: "ISFP",
    mirror: "ENTP",
    identical: "INTJ",
    kindred: "ISTJ",
    semidual: "ENFJ",
    pragmatic: "INFJ",
    illusionary: "ESTJ",
    beneficiary: "ISTP",
    giver: "INFP",
    supervisor: "ENFP",
    underling: "ESTP",
    quasidentical: "INTP",
    parallel: "ESFP",
    contrary: "ENTJ",
    superego: "ISFJ",
  },
  socionicAbbrevation: "ЛИИ",
  personalitiesTerm: "Architect",
};

export default INTJ;
