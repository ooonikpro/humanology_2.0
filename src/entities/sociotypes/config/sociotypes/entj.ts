import type { SociotypeDataType } from "@types";

const ENTJ: SociotypeDataType = {
  id: "ENTJ",
  quadra: "water",
  role: "knight",
  alias: "Джек Лондон",
  mindKey: "rational-1",
  mindset: "vortical",
  name: "Предприниматель",
  typeName: "businessman",
  gender: "male",
  club: "researcher",
  tarot: "pentacles", // масть
  psychotype: "victim", // группа
  populationPercentage: "2 ~ 5%",
  aspects: {
    lives: "business",
    creates: "time",
    mad: "logic",
    does: "ideas",
    afraid: "emotions",
    suffers: "comfort",
    desires: "people",
    likes: "will",
  },
  stimulant: "uniqueness",
  communication: "business",
  companion: "stubborn",
  temperament: "choleric",
  alignment: "lawfulEvil",
  yungs: ["rational", "intuit", "logic", "extravert"],
  reinin: [
    "dynamic",
    "positivist",
    "declatim",
    "strategist",
    "emotivist",

    "result",
    "compliant",
    "careless",

    "decisive",
    "objective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "ISFJ",
    activity: "ESFP",
    mirror: "INTP",
    identical: "ENTJ",
    kindred: "ESTJ",
    semidual: "INFJ",
    pragmatic: "ENFJ",
    illusionary: "ISTJ",
    beneficiary: "ESTP",
    giver: "ENFP",
    supervisor: "INFP",
    underling: "ISTP",
    quasidentical: "ENTP",
    parallel: "ISFP",
    contrary: "INTJ",
    superego: "ESFJ",
  },
  socionicAbbrevation: "ЛИЭ",
  personalitiesTerm: "Commander",
  shortDesctiption: {
    personAttributes:
      "Откровенен, решителен, с готовностью берет на себя лидерство.",
    personDesctiption: [
      "Быстро видит нелогичные и неэффективные процедуры и политики, разрабатывает и внедряет комплексные системы для решения организационных проблем.",
      "Любит долгосрочное планирование и постановку целей. Обычно хорошо информирован, начитан, любит расширять свои знания и передавать их другим. Настойчив в изложении своих идей.",
    ],
  },
};

export default ENTJ;
