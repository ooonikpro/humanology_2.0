import type { ClubDataType } from "@types";

const SOCIAL: ClubDataType = {
  id: "social",
  label: "Социал",
  tags: ["Этики", "Сенсорики", "Демократы"],
  title: "Социалы",
  subtitle:
    "Социальное обслуживание, общение, налаживание контактов, медицина.",
  description: [
    "Лучше всех чувствуют потребности общества и индивидов. Хорошо ведут хозяйство.",
  ],
} as const;

export default SOCIAL;
