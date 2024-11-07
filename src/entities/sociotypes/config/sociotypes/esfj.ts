import type { SociotypeDataType } from "@types";

const ESFJ: SociotypeDataType = {
  id: "ESFJ",
  quadra: "air",
  role: "queen",
  alias: "Гюго",
  mindKey: "rational-4",
  mindset: "vortical",
  name: "Энтузиаст",
  typeName: "enthusiast",
  gender: "female",
  club: "social",
  tarot: "wands", // масть
  psychotype: "caring", // группа
  populationPercentage: "9 ~ 13%",
  aspects: {
    lives: "emotions",
    creates: "comfort",
    mad: "people",
    does: "will",
    afraid: "business",
    suffers: "time",
    desires: "logic",
    likes: "ideas",
  },
  stimulant: "status",
  communication: "passionate",
  companion: "uncompromising",
  temperament: "choleric",
  alignment: "lawfulGood",
  yungs: ["rational", "sensory", "ethic", "extravert"],
  reinin: [
    "dynamic",
    "positivist",
    "declatim",
    "tactician",
    "constructivist",

    "result",
    "stubborn",
    "provident",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "INTJ",
    activity: "ENTP",
    mirror: "ISFP",
    identical: "ESFJ",
    kindred: "ENFJ",
    semidual: "ISTJ",
    pragmatic: "ESTJ",
    illusionary: "INFJ",
    beneficiary: "ENFP",
    giver: "ESTP",
    supervisor: "ISTP",
    underling: "INFP",
    quasidentical: "ESFP",
    parallel: "INTP",
    contrary: "ISFJ",
    superego: "ENTJ",
  },
  socionicAbbrevation: "ЭСЭ",
  personalitiesTerm: "Consul",
  shortDesctiption: {
    personAttributes:
      "Теплолюбивый, добросовестный и всегда готов к сотрудничеству. ",
    personDesctiption: [
      "Хочет гармонии в своем окружении и решительно работает над ее установлением. Любит работать с другими, чтобы выполнять задания точно и в срок. Лоялен, доводит до конца даже мелкие дела.",
      "Замечает, что нужно другим в их повседневной жизни, и старается это обеспечить. Хочет, чтобы его ценили за то, кем он является и что делает.",
    ],
  },
};

export default ESFJ;
