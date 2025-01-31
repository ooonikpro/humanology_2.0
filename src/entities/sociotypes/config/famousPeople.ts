import type { FamousPersonType } from "@types";
import { GenderEnum } from "@shared/constants";

const FAMOUS_PEOPLE: Array<FamousPersonType> = [
  {
    id: "ENTP",
    name: "Мила Йовович",
    role: "Актриса",
    birthDate: "17.12.1975",
    zodiac: "sagittarius",
    bazi: "rat",
    photo: "/public/assets/images/people/mila.jpg",
    gender: GenderEnum.female,
  },
  {
    id: "ENTP",
    name: "Билли Айлиш",
    role: "Певица",
    birthDate: "18.12.2001",
    zodiac: "sagittarius",
    bazi: "rat",
    photo: "/public/assets/images/people/billi.jpg",
    gender: GenderEnum.female,
  },
  {
    id: "ENTP",
    name: "Стив Джобс",
    role: "Предприниматель",
    birthDate: "24.02.1955",
    zodiac: "aries",
    bazi: "goat",
    photo: "/public/assets/images/people/steve.jpg",
    gender: GenderEnum.male,
  },
  {
    id: "ENTP",
    name: "Роберт Дауни Младший",
    role: "Актер",
    birthDate: "04.04.1965",
    zodiac: "aries",
    bazi: "snake",
    photo: "/public/assets/images/people/robert.jpg",
    gender: GenderEnum.male,
  },
  {
    id: "ENTP",
    name: "Генри Кэвилл",
    role: "Актер",
    birthDate: "05.05.1983",
    zodiac: "aries",
    bazi: "pig",
    photo: "/public/assets/images/people/henry.jpg",
    gender: GenderEnum.male,
  },
] as const;

export default FAMOUS_PEOPLE;
