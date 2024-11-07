import type { SociotypeDataType } from "@types";

const ISFJ: SociotypeDataType = {
  id: "ISFJ",
  quadra: "water",
  role: "lady",
  alias: "Драйзер",
  mindKey: "rational-4",
  mindset: "holographic",
  name: "Хранитель",
  typeName: "guardian",
  gender: "female",
  club: "social",
  tarot: "wands", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "9 ~ 14%",
  aspects: {
    lives: "people",
    creates: "will",
    mad: "emotions",
    does: "comfort",
    afraid: "logic",
    suffers: "ideas",
    desires: "business",
    likes: "time",
  },
  stimulant: "wealth",
  communication: "sincere",
  companion: "sensitive",
  temperament: "phlegmatic",
  alignment: "lawfulGood",
  yungs: ["rational", "sensory", "ethic", "introvert"],
  reinin: [
    "static",
    "negativist",
    "questim",
    "tactician",
    "constructivist",

    "result",
    "compliant",
    "provident",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "ENTJ",
    activity: "INTP",
    mirror: "ESFP",
    identical: "ISFJ",
    kindred: "INFJ",
    semidual: "ESTJ",
    pragmatic: "ISTJ",
    illusionary: "ENFJ",
    beneficiary: "INFP",
    giver: "ISTP",
    supervisor: "ESTP",
    underling: "ENFP",
    quasidentical: "ISFP",
    parallel: "ENTP",
    contrary: "ESFJ",
    superego: "INTJ",
  },
  socionicAbbrevation: "ЭСИ",
  personalitiesTerm: "Defender",
  shortDesctiption: {
    personAttributes: "Спокоен, доброжелателен, ответственен и добросовестен.",
    personDesctiption: [
      "Обязательно и неуклонно выполняет свои обязательства. Тщателен, кропотлив и точен. Лоялен, внимателен, замечает и запоминает особенности важных для них людей, заботится о самочувствии других.",
      "Стремится создать порядок и гармонию на работе и дома.",
    ],
  },
};

export default ISFJ;
