import type { PsychotypeDataType } from "@types";

const CHILDLIKE: PsychotypeDataType = {
  id: "childlike",
  label: "Инфантил",
  tags: ["Интуиты", "Рассудительные"],
  title: "Инфантилы",
  subtitle:
    "Проявляют качества ребёнка — непосредственность, любознательность, фантазирование.",
  description: [
    "Часто выбирают роль неопытного партнёра, с одной стороны осторожного, с другой стороны — стремящегося попробовать в жизни всё.",
  ],
} as const;

export default CHILDLIKE;
