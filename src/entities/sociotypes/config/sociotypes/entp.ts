import type { SociotypeDataType } from "@types";

const ENTP: SociotypeDataType = {
  id: "ENTP",
  quadra: "air",
  role: "knight",
  alias: "Дон Кихот",
  mindKey: "irrational-1",
  mindset: "causal",
  name: "Новатор",
  typeName: "innovator",
  gender: "male",
  club: "researcher",
  tarot: "swords", // масть
  psychotype: "childlike", // группа
  populationPercentage: "2 ~ 5%",
  socionicAbbrevation: "ИЛЭ",
  personalitiesTerm: "Debater",
  functions: {
    base: {
      variant: "extensive",
      aspect: "ideas",
    },
    creative: {
      variant: "intensive",
      aspect: "logic",
    },
    limit: {
      variant: "intensive",
      aspect: "time",
    },
    back: {
      variant: "extensive",
      aspect: "business",
    },
    role: {
      variant: "extensive",
      aspect: "will",
    },
    pain: {
      variant: "intensive",
      aspect: "people",
    },
    suggestive: {
      variant: "intensive",
      aspect: "comfort",
    },
    activate: {
      variant: "extensive",
      aspect: "emotions",
    },
  },
  stimulant: "uniqueness",
  communication: "business",
  companion: "categorical",
  temperament: "sanguine",
  alignment: "chaoticNeutral",
  yungs: ["irrational", "intuit", "logic", "extravert"],
  reinin: [
    "static",
    "positivist",
    "questim",
    "tactician",
    "constructivist",

    "process",
    "compliant",
    "careless",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "ISFP",
    activity: "ESFJ",
    mirror: "INTJ",
    identical: "ENTP",
    kindred: "ENFP",
    semidual: "ISTP",
    pragmatic: "ESTP",
    illusionary: "INFP",
    beneficiary: "ENFJ",
    giver: "ESTJ",
    supervisor: "ISTJ",
    underling: "INFJ",
    quasidentical: "ENTJ",
    parallel: "ISFJ",
    contrary: "INTP",
    superego: "ESFP",
  },
};

export default ENTP;
