
export type * from "./iconNames";

export type Gender = "male" | "female";

export type QuadrasType = "air" | "fire" | "earth" | "water";

export type RoleType = "knight" | "king" | "queen" | "page" | "lady";

export type PsychotypeType = "childlike" | "aggressor" | "caring" | "victim";

export type TarotType = "swords" | "pentacles" | "cups" | "wands";

export type ClubType = "researcher" | "pragmatist" | "social" | "humanitarian";

export type MindKey =
  | "irrational-1"
  | "irrational-2"
  | "rational-1"
  | "rational-4";

export type Mindset = "causal" | "algorithmic" | "vortical" | "holographic";

export type SociotypeIdType =
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

export type SociotypeNameType =
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

export type DichotomyType =
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

export type ReininSignType =
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

export type SignPropType = {
  label: string;
  quadra: QuadrasType;
};

export type SociotypeDataType = {
  id: SociotypeIdType;
  quadra: QuadrasType;
  role: RoleType;
  alias: string;
  typeName: SociotypeNameType;
  mindKey: MindKey;
  mindset: Mindset;
  name: string;
  gender: Gender;
  club: ClubType;
  tarot: TarotType;
  psychotype: PsychotypeType;
  populationPercentage: string;
  socionicAbbrevation: string;
  personalitiesTerm: string;
  aspects: Record<AspectKey, Aspect>;
  stimulant: Stimulant;
  communication: CommunicationStyle;
  companion: Companion;
  temperament: Temperament;
  alignment: Alignment;
  yungs: DichotomyType[];
  reinin: ReininSignType[];
  intertypeRelations: Record<IntertypeRelations, SociotypeIdType>;
};

export type UnixDate = string; // mm/dd/yyyy


