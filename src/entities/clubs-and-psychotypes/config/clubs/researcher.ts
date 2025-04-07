import type { ClubDataType } from "@types";

const RESEARCHER: ClubDataType = {
  id: "researcher",
  label: "Исследователь",
  tags: ["Логики", "Интуиты", "Демократы"],
  title: "Исследователи",
  subtitle:
    "Научно-исследовательская и конструкторская деятельность, анализ и прогнозирование.",
  description: [
    "Хорошо разбираются в универсальных законах и правилах, общих принципах устройства и функционирования устройств.",
  ],
} as const;

export default RESEARCHER;
