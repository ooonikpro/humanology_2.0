import type { SociotypeDataType } from "@types";

const ESTJ: SociotypeDataType = {
  id: "ESTJ",
  quadra: "earth",
  role: "king",
  alias: "Штирлиц",
  mindKey: "rational-4",
  mindset: "algorithmic",
  name: "Администратор",
  typeName: "administrator",
  gender: "male",
  club: "pragmatist",
  tarot: "pentacles",
  psychotype: "caring",
  populationPercentage: "8 ~ 12%",
  functions: {
    base: {
      variant: "extensive",
      aspect: "business",
    },
    creative: {
      variant: "intensive",
      aspect: "comfort",
    },
    limit: {
      variant: "intensive",
      aspect: "logic",
    },
    back: {
      variant: "extensive",
      aspect: "will",
    },
    role: {
      variant: "extensive",
      aspect: "emotions",
    },
    pain: {
      variant: "intensive",
      aspect: "time",
    },
    suggestive: {
      variant: "intensive",
      aspect: "people",
    },
    activate: {
      variant: "extensive",
      aspect: "ideas",
    },
  },
  stimulant: "status",
  communication: "business",
  companion: "stubborn",
  temperament: "choleric",
  alignment: "lawfulEvil",
  yungs: ["rational", "sensory", "logic", "extravert"],
  reinin: [
    "dynamic",
    "negativist",
    "questim",
    "tactician",
    "emotivist",

    "process",
    "compliant",
    "provident",

    "reasonable",
    "objective",
    "aristocrat",
  ],
  intertypeRelations: {
    dual: "INFJ",
    activity: "ENFP",
    mirror: "ISTP",
    identical: "ESTJ",
    kindred: "ENTJ",
    semidual: "ISFJ",
    pragmatic: "ESFJ",
    illusionary: "INTJ",
    beneficiary: "ISFP",
    giver: "ESFP",
    supervisor: "ENTP",
    underling: "INTP",
    quasidentical: "ESTP",
    parallel: "INFP",
    contrary: "ISTJ",
    superego: "ENFJ",
  },
  socionicAbbrevation: "ЛСЭ",
  personalitiesTerm: "Executive",
};

export default ESTJ;
