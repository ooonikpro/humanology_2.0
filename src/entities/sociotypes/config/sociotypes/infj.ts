import type { SociotypeDataType } from "@types";

const INFJ: SociotypeDataType = {
  id: "INFJ",
  quadra: "earth",
  role: "page",
  alias: "Достоевский",
  mindKey: "rational-1",
  mindset: "causal",
  name: "Гуманист",
  typeName: "humanist",
  gender: "female",
  club: "humanitarian",
  tarot: "wands", // масть
  psychotype: "childlike", // группа
  populationPercentage: "1 ~ 3%",
  functions: {
    base: {
      variant: "intensive",
      aspect: "people",
    },
    creative: {
      variant: "intensive",
      aspect: "ideas",
    },
    limit: {
      variant: "intensive",
      aspect: "emotions",
    },
    back: {
      variant: "intensive",
      aspect: "time",
    },
    role: {
      variant: "intensive",
      aspect: "logic",
    },
    pain: {
      variant: "intensive",
      aspect: "will",
    },
    suggestive: {
      variant: "intensive",
      aspect: "business",
    },
    activate: {
      variant: "intensive",
      aspect: "comfort",
    },
  },
  stimulant: "selfSufficiency",
  communication: "sincere",
  companion: "provident",
  temperament: "phlegmatic",
  alignment: "neutralGood",
  yungs: ["rational", "intuit", "ethic", "introvert"],
  reinin: [
    "static",
    "positivist",
    "declatim",
    "strategist",
    "constructivist",

    "process",
    "compliant",
    "provident",

    "reasonable",
    "objective",
    "aristocrat",
  ],
  intertypeRelations: {
    quadral: {
      dual: "ESTJ",
      activity: "ISTP",
      identical: "INFJ",
      mirror: "ENFP",
    },

    favorable: {
      kindred: "ISFJ",
      semidual: "ENTJ",
      pragmatic: "INTJ",
      illusionary: "ESFJ",
    },

    neutral: {
      beneficiary: "ENTP",
      giver: "INTP",
      supervisor: "ISFP",
      underling: "ESFP",
    },

    unfavorable: {
      quasidentical: "INFP",
      parallel: "ESTP",
      contrary: "ENFJ",
      superego: "ISTJ",
    },
  },
  socionicAbbrevation: "ЭИИ",
  personalitiesTerm: "Advocate",
};

export default INFJ;
