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
      variant: "extensive",
      aspect: "business",
    },
    limit: {
      variant: "extensive",
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
      variant: "extensive",
      aspect: "emotions",
    },
    suggestive: {
      variant: "extensive",
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
  alignment: "chaoticNeutral",
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
