import type { SociotypeDataType } from "@types";

const ESFP: SociotypeDataType = {
  id: "ESFP",
  quadra: "water",
  role: "queen",
  alias: "Наполеон",
  mindKey: "irrational-2",
  mindset: "causal",
  name: "Политик",
  typeName: "politic",
  gender: "female",
  club: "social",
  tarot: "cups", // масть
  psychotype: "aggressor", // группа
  populationPercentage: "4 ~ 9%",
  aspects: {
    lives: "will",
    creates: "people",
    mad: "comfort",
    does: "emotions",
    afraid: "ideas",
    suffers: "logic",
    desires: "time",
    likes: "business",
  },
  stimulant: "status",
  communication: "passionate",
  companion: "volitional",
  temperament: "sanguine",
  alignment: "chaoticGood",
  yungs: ["irrational", "sensory", "ethic", "extravert"],
  reinin: [
    "static",
    "positivist",
    "questim",
    "strategist",
    "emotivist",

    "process",
    "stubborn",
    "provident",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "INTP",
    activity: "ENTJ",
    mirror: "ISFJ",
    identical: "ESFP",
    kindred: "ESTP",
    semidual: "INFP",
    pragmatic: "ENFP",
    illusionary: "ISTP",
    beneficiary: "ESTJ",
    giver: "ENFJ",
    supervisor: "INFJ",
    underling: "ISTJ",
    quasidentical: "ESFJ",
    parallel: "INTJ",
    contrary: "ISFP",
    superego: "ENTP",
  },
  socionicAbbrevation: "СЭЭ",
  personalitiesTerm: "Entertainer",
  shortDesctiption: {
    personAttributes: "Общительный, дружелюбный и принимающий.",
    personDesctiption: [
      "Бурно любит жизнь, людей и материальные блага. Ему нравится работать с другими людьми, чтобы воплотить задуманное в жизнь. Привносит в свою работу здравый смысл и реалистичный подход, делает работу увлекательной.",
      " Гибкий и спонтанный, легко адаптируется к новым людям и обстановке. Лучше всего учится, пробуя новый навык вместе с другими людьми.",
    ],
  },
};

export default ESFP;
