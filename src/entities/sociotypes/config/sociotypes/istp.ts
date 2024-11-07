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
  aspects: {
    lives: "comfort",
    creates: "business",
    mad: "will",
    does: "logic",
    afraid: "time",
    suffers: "emotions",
    desires: "ideas",
    likes: "people",
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
  shortDesctiption: {
    personAttributes:
      "Терпимый и гибкий, спокойно наблюдающийза происходящим до тех пор, пока не возникнет проблема, а затем быстро действующий для поиска работоспособных решений.",
    personDesctiption: [
      "Анализирует то, что заставляет вещи работать, и легко пробирается через большие объемы данных, чтобы вычленить суть практических проблем.",
      "Интересуется причинно-следственными связями, упорядочивают факты, используя логические принципы, ценит эффективность.",
    ],
  },
};

export default ISTP;
