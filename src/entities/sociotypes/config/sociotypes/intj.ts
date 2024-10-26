import type { SociotypeDataType } from "@types";

const INTJ: SociotypeDataType = {
  id: "INTJ",
  quadra: "air",
  role: "page",
  alias: "Робеспьер",
  mindKey: "rational-1",
  mindset: "holographic",
  name: "Аналитик",
  typeName: "analytic",
  gender: "male",
  club: "researcher",
  tarot: "pentacles", // масть
  psychotype: "childlike", // группа
  populationPercentage: "2 ~ 4%",
  aspects: {
    lives: "logic",
    creates: "ideas",
    mad: "business",
    does: "time",
    afraid: "people",
    suffers: "will",
    desires: "emotions",
    likes: "comfort",
  },
  stimulant: "selfSufficiency",
  communication: "coldBlooded",
  companion: "restrained",
  temperament: "phlegmatic",
  alignment: "trueNeutral",
  yungs: ["rational", "intuit", "logic", "introvert"],
  reinin: [
    "static",
    "negativist",
    "questim",
    "strategist",
    "emotivist",

    "result",
    "stubborn",
    "provident",

    "reasonable",
    "subjective",
    "democrat",
  ],
  intertypeRelations: {
    dual: "ESFJ",
    activity: "ISFP",
    mirror: "ENTP",
    identical: "INTJ",
    kindred: "ISTJ",
    semidual: "ENFJ",
    pragmatic: "INFJ",
    illusionary: "ESTJ",
    beneficiary: "ISTP",
    giver: "INFP",
    supervisor: "ENFP",
    underling: "ESTP",
    quasidentical: "INTP",
    parallel: "ESFP",
    contrary: "ENTJ",
    superego: "ISFJ",
  },
};

export default INTJ;
