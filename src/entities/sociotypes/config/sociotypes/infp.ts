import type { SociotypeDataType } from "@types";

const INFP: SociotypeDataType = {
  id: "INFP",
  quadra: "fire",
  role: "page",
  alias: "Есенин",
  mindKey: "irrational-1",
  mindset: "vortical",
  name: "Лирик",
  typeName: "lyricist",
  gender: "female",
  club: "humanitarian",
  tarot: "cups", // масть
  psychotype: "victim", // группа
  populationPercentage: "4 ~ 5%",
  aspects: {
    lives: "time",
    creates: "emotions",
    mad: "ideas",
    does: "people",
    afraid: "comfort",
    suffers: "business",
    desires: "will",
    likes: "logic",
  },
  stimulant: "selfSufficiency",
  communication: "sincere",
  companion: "provident",
  temperament: "melancholic",
  alignment: "chaoticGood",
  yungs: ["irrational", "intuit", "ethic", "introvert"],
  reinin: [
    "dynamic",
    "positivist",
    "questim",
    "tactician",
    "emotivist",

    "result",
    "compliant",
    "provident",

    "decisive",
    "subjective",
    "aristocrat",
  ],
  intertypeRelations: {
    dual: "ESTP",
    activity: "ISTJ",
    mirror: "ENFJ",
    identical: "INFP",
    kindred: "INTP",
    semidual: "ESFP",
    pragmatic: "ISFP",
    illusionary: "ENTP",
    beneficiary: "INTJ",
    giver: "ISFJ",
    supervisor: "ESFJ",
    underling: "ENTJ",
    quasidentical: "INFJ",
    parallel: "ESTJ",
    contrary: "ENFP",
    superego: "ISTP",
  },
};

export default INFP;