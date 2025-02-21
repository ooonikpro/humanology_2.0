import type { SociotypeDataType } from "@types";

const ISTP: SociotypeDataType = {
  id: "ISTP",
  quadra: "earth",
  role: "lady",
  alias: "Габен",
  mindKey: "irrational-1",
  mindset: "vortical",
  name: "Мастер",
  typeName: "master",
  gender: "male",
  club: "pragmatist",
  tarot: "swords", // масть
  psychotype: "caring", // группа
  populationPercentage: "4 ~ 6%",
  functions: {
    base: {
      variant: "intensive",
      aspect: "comfort",
    },
    creative: {
      variant: "intensive",
      aspect: "business",
    },
    limit: {
      variant: "intensive",
      aspect: "will",
    },
    back: {
      variant: "intensive",
      aspect: "logic",
    },
    role: {
      variant: "intensive",
      aspect: "time",
    },
    pain: {
      variant: "intensive",
      aspect: "emotions",
    },
    suggestive: {
      variant: "intensive",
      aspect: "ideas",
    },
    activate: {
      variant: "intensive",
      aspect: "people",
    },
  },
  stimulant: "wealth",
  communication: "coldBlooded",
  companion: "restrained",
  temperament: "melancholic",
  alignment: "neutralEvil",
  yungs: ["irrational", "sensory", "logic", "introvert"],
  reinin: [
    "dynamic",
    "positivist",
    "questim",
    "strategist",
    "constructivist",

    "result",
    "stubborn",
    "careless",

    "reasonable",
    "objective",
    "aristocrat",
  ],
  intertypeRelations: {
    dual: "ENFP",
    activity: "INFJ",
    mirror: "ESTJ",
    identical: "ISTP",
    kindred: "ISFP",
    semidual: "ENTP",
    pragmatic: "INTP",
    illusionary: "ESFP",
    beneficiary: "ISFJ",
    giver: "INTJ",
    supervisor: "ENTJ",
    underling: "ESFJ",
    quasidentical: "ISTJ",
    parallel: "ENFJ",
    contrary: "ESTP",
    superego: "INFP",
  },
  socionicAbbrevation: "СЛИ",
  personalitiesTerm: "Virtuoso",
};

export default ISTP;
