import type { IconNameType } from "./iconNames";

export type * from "./iconNames";

export type Gender = "male" | "female";

export type QuadrasType = "air" | "fire" | "earth" | "water";

export type RoleType = "knight" | "king" | "queen" | "page" | "lady";

export type PsychotypeType = "childlike" | "aggressor" | "caring" | "victim";

export type TarotType = "swords" | "pentacles" | "cups" | "wands";

export type ClubType = "researcher" | "pragmatist" | "social" | "humanitarian";

export type MindKeyType =
  | "irrational-1"
  | "irrational-2"
  | "rational-1"
  | "rational-4";

export type MindsetType = "causal" | "algorithmic" | "vortical" | "holographic";

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

export type StimulantType =
  | "uniqueness"
  | "wealth"
  | "status"
  | "selfSufficiency";

export type CommunicationStyleType =
  | "business"
  | "sincere"
  | "passionate"
  | "coldBlooded";

export type CompanionType =
  | "categorical"
  | "sensitive"
  | "uncompromising"
  | "restrained"
  | "provident"
  | "volitional"
  | "stubborn";

export type TemperamentType =
  | "sanguine"
  | "melancholic"
  | "choleric"
  | "phlegmatic";

export type AlignmentType =
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

export type BaziSignType =
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
  | "snake"
  | "rabbit";

export type YearElements = "wood" | "fire" | "earth" | "metal" | "water";

export type ZodiacSignType =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricornus"
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
  mindKey: MindKeyType;
  mindset: MindsetType;
  name: string;
  gender: Gender;
  club: ClubType;
  tarot: TarotType;
  psychotype: PsychotypeType;
  populationPercentage: string;
  socionicAbbrevation: string;
  personalitiesTerm: string;
  aspects: Record<AspectKey, Aspect>;
  stimulant: StimulantType;
  communication: CommunicationStyleType;
  companion: CompanionType;
  temperament: TemperamentType;
  alignment: AlignmentType;
  yungs: DichotomyType[];
  reinin: ReininSignType[];
  intertypeRelations: Record<IntertypeRelations, SociotypeIdType>;
};

export type DateRuLocaleType = `${string}.${string}.${string}`; // dd.mm.yyyy

export type SociotypeAgeType = "kid" | "young" | "adult";
export type TextColorType =
  | "white"
  | "grey"
  | "dark-grey"
  | "beige"
  | "black"
  | "shadow"
  | "accent"
  | "turquoise"
  | "green"
  | "yellow"
  | "pink"
  | "air"
  | "fire"
  | "water"
  | "earth"
  | "quadra"
  | "role";

export type OptionType<T = string> = {
  label: string;
  value: T;
};

export type OptionWithIconType<T = string> = OptionType<T> & {
  iconName: IconNameType;
};

export type OptionWithSubtitleType<T = string> = OptionType<T> & {
  subtitle: string;
};

export type IconSizeType =
  | "12"
  | "16"
  | "20"
  | "24"
  | "48"
  | "64"
  | "80"
  | "96";

export type SociotypeTabType = {
  name: string;
  iconName: IconNameType;
  label: string;
};

export type FamousPersonType = {
  id: SociotypeIdType;
  name: string;
  role: string;
  birthDate: DateRuLocaleType;
  zodiac: ZodiacSignType;
  bazi: BaziSignType;
  photo: string;
  gender: Gender;
};
