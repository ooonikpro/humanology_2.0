import type { SociotypeDataType } from "@types";

const INFJ: SociotypeDataType = {
  id: "INFJ",
  quadra: "earth",
  role: "page",
  alias: "Достоевский",
  mindKey: "rational-1",
  mindset: "causal",
  name: "Гуманист",
  typeName: "humanist",
  gender: "female",
  club: "humanitarian",
  tarot: "wands", // масть
  psychotype: "childlike", // группа
  populationPercentage: "1 ~ 3%",
  aspects: {
    lives: "people",
    creates: "ideas",
    mad: "emotions",
    does: "time",
    afraid: "logic",
    suffers: "will",
    desires: "business",
    likes: "comfort",
  },
  stimulant: "selfSufficiency",
  communication: "sincere",
  companion: "provident",
  temperament: "phlegmatic",
  alignment: "neutralGood",
  yungs: ["rational", "intuit", "ethic", "introvert"],
  reinin: [
    "static",
    "positivist",
    "declatim",
    "strategist",
    "constructivist",

    "process",
    "compliant",
    "provident",

    "reasonable",
    "objective",
    "aristocrat",
  ],
  intertypeRelations: {
    dual: "ESTJ",
    activity: "ISTP",
    identical: "INFJ",
    mirror: "ENFP",
    kindred: "ISFJ",
    semidual: "ENTJ",
    pragmatic: "INTJ",
    illusionary: "ESFJ",
    beneficiary: "ENTP",
    giver: "INTP",
    supervisor: "ISFP",
    underling: "ESFP",
    quasidentical: "INFP",
    parallel: "ESTP",
    contrary: "ENFJ",
    superego: "ISTJ",
  },
};

export default INFJ;
