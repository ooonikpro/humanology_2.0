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
  socionicAbbrevation: "СЛЭ",
  personalitiesTerm: "Enterpreneur",
  shortDesctiption: {
    personAttributes:
      "Гибкий и терпимый, он придерживается прагматического подхода, ориентированного на немедленный результат. ",
    personDesctiption: [
      "Теории и концептуальные объяснения его утомляют. Он хочет энергично действовать, чтобы решить проблему. Ориентирован на «здесь и сейчас», спонтанен, наслаждается каждым моментом, когда может быть активен с другими.",
      "Наслаждается материальными удобствами и стилем. Лучше всего учится на практике.",
    ],
  },
};

export default ESTP;
