import type { SociotypeDataType } from "@types";

const ENTP: SociotypeDataType = {
  id: "ENTP",
  quadra: "air",
  role: "knight",
  alias: "Дон Кихот",
  mindKey: "irrational-1",
  mindset: "causal",
  name: "Новатор",
  typeName: "innovator",
  gender: "male",
  club: "researcher",
  tarot: "swords", // масть
  psychotype: "childlike", // группа
  populationPercentage: "2 ~ 5%",
  socionicAbbrevation: "ИЛЭ",
  personalitiesTerm: "Debater",
  aspects: {
    lives: "ideas",
    creates: "logic",
    mad: "time",
    does: "business",
    afraid: "will",
    suffers: "people",
    desires: "comfort",
    likes: "emotions",
  },
  stimulant: "uniqueness",
  communication: "business",
  companion: "categorical",
  temperament: "sanguine",
  alignment: "chaoticNeutral",
  yungs: ["irrational", "intuit", "logic", "extravert"],
  reinin: [
    "static",
    "positivist",
    "questim",
    "tactician",
    "constructivist",

    "process",
    "compliant",
    "careless",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "ISFP",
    activity: "ESFJ",
    mirror: "INTJ",
    identical: "ENTP",
    kindred: "ENFP",
    semidual: "ISTP",
    pragmatic: "ESTP",
    illusionary: "INFP",
    beneficiary: "ENFJ",
    giver: "ESTJ",
    supervisor: "ISTJ",
    underling: "INFJ",
    quasidentical: "ENTJ",
    parallel: "ISFJ",
    contrary: "INTP",
    superego: "ESFP",
  },
  shortDesctiption: {
    personAttributes:
      "Быстрый, изобретательный, стимулирующий, внимательный и открытый.",
    personDesctiption: [
      "Находчив в решении новых и сложных задач. Умеет генерировать концептуальные возможности и затем стратегически анализировать их.",
      " Скучает от рутины, редко занимается одним и тем же делом, склонен часто менять свои интересы.",
    ],
  },
};

export default ENTP;
