export type Gender = "male" | "female";

export type Quadras = "air" | "fire" | "earth" | "water";

export type Role = "knight" | "king" | "queen" | "paige" | "lady";

export type Psychotype = "infantile" | "aggressor" | "care" | "victim";

export type Tarot = "swords" | "pentacles" | "cups" | "wands";

export type Club = "scientific" | "practice" | "social" | "humanitarian";

export type MindKey =
  | "irrational-1"
  | "irrational-2"
  | "rational-1"
  | "rational-4";

export type Mindset = "causal" | "algorithmic" | "vortical" | "holographic";

export type SocionicsType =
  | "ENTP"
  | "ISFP"
  | "ESFJ"
  | "INTJ"
  | "ISTJ"
  | "ENFJ"
  | "INFP"
  | "ESTP"
  | "INTP"
  | "ESFP"
  | "ISFJ"
  | "ENTJ"
  | "ESTJ"
  | "INFJ"
  | "ENFP"
  | "ISTP";

export type SocionicsTypeName =
  | "innovator"
  | "diplomat"
  | "enthusiast"
  | "analytic"
  | "inspector"
  | "mentor"
  | "lyricist"
  | "leader"
  | "critic"
  | "politic"
  | "guardian"
  | "businessman"
  | "administrator"
  | "humanist"
  | "adviser"
  | "master";

export type Aspect =
  | "ideas"
  | "business"
  | "will"
  | "emotions"
  | "time"
  | "logic"
  | "comfort"
  | "people";

export type AspectKey =
  | "lives"
  | "creates"
  | "mad"
  | "does"
  | "afraid"
  | "suffers"
  | "desires"
  | "likes";

export type HumanFunction =
  | "base"
  | "creative"
  | "suggestive"
  | "activate"
  | "role"
  | "pain"
  | "back"
  | "limit";

export type FunctionLevel = "1" | "2" | "3" | "4";

export type Stimulant = "uniqueness" | "wealth" | "status" | "selfSufficiency";

export type CommunicationStyle =
  | "business"
  | "sincere"
  | "passionate"
  | "coldBlooded";

export type Companion =
  | "categorical"
  | "sensitive"
  | "uncompromising"
  | "restrained"
  | "provident"
  | "volitional"
  | "stubborn";

export type Temperament =
  | "sanguine"
  | "melancholic"
  | "choleric"
  | "phlegmatic";

export type Alignment =
  | "chaoticNeutral"
  | "chaoticGood"
  | "chaoticEvil"
  | "lawfulNeutral"
  | "lawfulGood"
  | "lawfulEvil"
  | "trueNeutral"
  | "neutralEvil"
  | "neutralGood";

export type Dichotomy =
  | "intuit"
  | "sensory"
  | "logic"
  | "ethic"
  | "extravert"
  | "introvert"
  | "irrational"
  | "rational";

export type IntertypeRelations =
  | "dual"
  | "activity"
  | "mirror"
  | "identical"
  | "kindred"
  | "semidual"
  | "pragmatic"
  | "illusionary"
  | "beneficiary"
  | "giver"
  | "supervisor"
  | "underling"
  | "quasidentical"
  | "parallel"
  | "contrary"
  | "superego";

export type ReininSign =
  | "static"
  | "dynamic"
  | "positivist"
  | "negativist"
  | "questim"
  | "declatim"
  | "tactician"
  | "strategist"
  | "constructivist"
  | "emotivist"
  | "process"
  | "result"
  | "compliant"
  | "stubborn"
  | "careless"
  | "provident"
  | "reasonable"
  | "decisive"
  | "subjective"
  | "objective"
  | "democrat"
  | "aristocrat";

export type BaziSign =
  | "bull"
  | "dragon"
  | "goat"
  | "rat"
  | "horse"
  | "monkey"
  | "chicken"
  | "dog"
  | "pig"
  | "tiger"
  | "hare"
  | "snake";

export type YearElements = "wood" | "fire" | "earth" | "metal" | "water";

export type ZodiacSign =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type SignProp = {
  label: string;
  element: Quadras;
};

export type IntertypeProp = {
  element: Quadras;
  role: Role;
  alias: string;
  typeName: SocionicsTypeName;
  mindKey: MindKey;
  mindset: Mindset;
  name: string;
  gender: Gender;
  club: Club;
  tarot: Tarot;
  psychotype: Psychotype;
  populationPercentage: string;
  aspects: Record<AspectKey, Aspect>;
  stimulant: Stimulant;
  communication: CommunicationStyle;
  companion: Companion;
  temperament: Temperament;
  alignment: Alignment;
  yungs: Dichotomy[];
  reinin: ReininSign[];
  intertypeRelations: Record<IntertypeRelations, SocionicsType>;
};

export type UnixDate = string; // mm/dd/yyyy
