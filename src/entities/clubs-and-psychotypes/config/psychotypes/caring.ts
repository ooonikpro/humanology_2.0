import type { PsychotypeDataType } from "@types";

const CARING: PsychotypeDataType = {
  id: "caring",
  label: "Заботливый",
  tags: ["Сенсорики", "Рассудительные"],
  title: "Заботливые",
  subtitle: "Мягкие, склонные опекать, защищать, поддерживать партнёра.",
  description: [
    "Стремятся быть более опытными в повседневных делах, но к власти не стремятся.",
  ],
} as const;

export default CARING;
