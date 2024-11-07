import type { SociotypeDataType } from "@types";

const ENFP: SociotypeDataType = {
  id: "ENFP",
  quadra: "earth",
  role: "knight",
  alias: "Гексли",
  mindKey: "irrational-1",
  mindset: "holographic",
  name: "Советчик",
  typeName: "adviser",
  gender: "female",
  club: "humanitarian",
  tarot: "cups", // масть
  psychotype: "childlike", // группа
  populationPercentage: "6 ~ 8%",
  aspects: {
    lives: "ideas",
    creates: "people",
    mad: "time",
    does: "emotions",
    afraid: "will",
    suffers: "logic",
    desires: "comfort",
    likes: "business",
  },
  stimulant: "uniqueness",
  communication: "passionate",
  companion: "uncompromising",
  temperament: "sanguine",
  alignment: "chaoticGood",
  yungs: ["irrational", "intuit", "ethic", "extravert"],
  reinin: [
    "static",
    "negativist",
    "declatim",
    "tactician",
    "emotivist",

    "result",
    "stubborn",
    "careless",

    "reasonable",
    "objective",
    "aristocrat",
  ],
  intertypeRelations: {
    dual: "ISTP",
    activity: "ESTJ",
    mirror: "INFJ",
    identical: "ENFP",
    kindred: "ENTP",
    semidual: "ISFP",
    pragmatic: "ESFP",
    illusionary: "INTP",
    beneficiary: "ENTJ",
    giver: "ESFJ",
    supervisor: "ISFJ",
    underling: "INTJ",
    quasidentical: "ENFJ",
    parallel: "ISTJ",
    contrary: "INFP",
    superego: "ESTP",
  },
  socionicAbbrevation: "ИЭЭ",
  personalitiesTerm: "Campaigner",
  shortDesctiption: {
    personAttributes: "Горячий энтузиаст и фантазер.",
    personDesctiption: [
      "Видит в жизни множество возможностей. Быстро устанавливает связи между событиями и информацией и уверенно действует на основе увиденных закономерностей.",
      "Хочет получить большое количество одобрения от окружающих и с готовностью оказывает признательность и поддержку. Спонтанен и гибок, часто полагается на свою способность к импровизации и беглость речи.",
    ],
  },
};

export default ENFP;
