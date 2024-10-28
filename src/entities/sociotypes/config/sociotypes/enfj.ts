import type { SociotypeDataType } from "@types";

const ENFJ: SociotypeDataType = {
  id: "ENFJ",
  quadra: "fire",
  role: "knight",
  alias: "Гамлет",
  mindKey: "rational-1",
  mindset: "algorithmic",
  name: "Наставник",
  typeName: "mentor",
  gender: "female",
  club: "humanitarian",
  tarot: "wands", // масть
  psychotype: "victim", // группа
  populationPercentage: "2 ~ 5%",
  aspects: {
    lives: "emotions",
    creates: "time",
    mad: "people",
    does: "ideas",
    afraid: "business",
    suffers: "comfort",
    desires: "logic",
    likes: "will",
  },
  stimulant: "uniqueness",
  communication: "passionate",
  companion: "categorical",
  temperament: "choleric",
  alignment: "neutralGood",
  yungs: ["rational", "intuit", "ethic", "extravert"],
  reinin: [
    "dynamic",
    "negativist",
    "questim",
    "strategist",
    "constructivist",

    "process",
    "stubborn",
    "careless",

    "decisive",
    "subjective",
    "aristocrat",
  ],
  intertypeRelations: {
    dual: "ISTJ",
    activity: "ESTP",
    mirror: "INFP",
    identical: "ENFJ",
    kindred: "ESFJ",
    semidual: "INTJ",
    pragmatic: "ENTJ",
    illusionary: "ISFJ",
    beneficiary: "ESFP",
    giver: "ENTP",
    supervisor: "INTP",
    underling: "ISFP",
    quasidentical: "ENFP",
    parallel: "ISTP",
    contrary: "INFJ",
    superego: "ESTJ",
  },
};

export default ENFJ;