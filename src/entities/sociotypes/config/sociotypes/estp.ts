import type { SociotypeDataType } from "@types";

const ESTP: SociotypeDataType = {
  id: "ESTP",
  quadra: "fire",
  role: "king",
  alias: "Маршал Жуков",
  mindKey: "irrational-1",
  mindset: "vortical",
  name: "Лидер",
  typeName: "leader",
  gender: "male",
  club: "pragmatist",
  tarot: "swords", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "4 ~ 5%",
  aspects: {
    lives: "will",
    creates: "logic",
    mad: "comfort",
    does: "business",
    afraid: "ideas",
    suffers: "people",
    desires: "time",
    likes: "emotions",
  },
  stimulant: "status",
  communication: "business",
  companion: "volitional",
  temperament: "sanguine",
  alignment: "chaoticEvil",
  yungs: ["irrational", "sensory", "logic", "extravert"],
  reinin: [
    "static",
    "negativist",
    "declatim",
    "strategist",
    "constructivist",

    "result",
    "compliant",
    "provident",

    "decisive",
    "subjective",
    "aristocrat",
  ],
  intertypeRelations: {
    dual: "INFP",
    activity: "ENFJ",
    mirror: "ISTJ",
    identical: "ESTP",
    kindred: "ESFP",
    semidual: "INTP",
    pragmatic: "ENTP",
    illusionary: "ISFP",
    beneficiary: "ESFJ",
    giver: "ENTJ",
    supervisor: "INTJ",
    underling: "ISFJ",
    quasidentical: "ESTJ",
    parallel: "INFJ",
    contrary: "ISTP",
    superego: "ENFP",
  },
};

export default ESTP;
