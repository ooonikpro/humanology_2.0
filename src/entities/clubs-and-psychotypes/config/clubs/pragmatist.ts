import type { ClubDataType } from "@types";

const PRAGMATIST: ClubDataType = {
  id: "pragmatist",
  label: "Практик",
  tags: ["Логики", "Сенсорики", "Аристократы"],
  title: "Практики",
  subtitle:
    "Налаживание процессов, производство, управление техникой, техническое сервисное обслуживание.",
  description: [
    "Могут досконально разобраться в технике. Хорошо налаживают производство, учитывая все мелочи. Также прекрасно владеют инструментом.",
  ],
} as const;

export default PRAGMATIST;
