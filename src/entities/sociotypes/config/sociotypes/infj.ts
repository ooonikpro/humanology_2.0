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
      variant: "extensive",
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
      variant: "extensive",
      aspect: "time",
    },
    role: {
      variant: "extensive",
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
      variant: "extensive",
      aspect: "comfort",
    },
  },
  stimulant: "selfSufficiency",
  communication: "sincere",
  companion: "provident",
  temperament: "phlegmatic",
  alignment: "trueNeutral",
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
    dual: "ESTJ",
    activity: "ISTP",
    identical: "INFJ",
    mirror: "ENFP",
    kindred: "ISFJ",
    semidual: "ENTJ",
    pragmatic: "INTJ",
    illusionary: "ESFJ",
    beneficiary: "ENTP",
    giver: "INTP",
    supervisor: "ISFP",
    underling: "ESFP",
    quasidentical: "INFP",
    parallel: "ESTP",
    contrary: "ENFJ",
    superego: "ISTJ",
  },
  socionicAbbrevation: "ЭИИ",
  personalitiesTerm: "Advocate",
};

export default INFJ;
