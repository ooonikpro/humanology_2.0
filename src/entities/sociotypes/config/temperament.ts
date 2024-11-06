import type { TemperamentType } from "@types";

export const TEMPERAMENT_LVL = {
  choleric: 4,
  phlegmatic: 1,
  melancholic: 2,
  sanguine: 3,
};

export const TEMPERAMENT: Record<TemperamentType, string> = {
  sanguine: "Сангвиник",
  melancholic: "Меланхолик",
  phlegmatic: "Флегматик",
  choleric: "Холерик",
};

export const TEMPERAMENT_LABEL: Record<TemperamentType, string> = {
  sanguine: "Гибко-разворотливый",
  melancholic: "Восприимчиво-адаптивный",
  phlegmatic: "Уравновешенно-стабильный",
  choleric: "Линейно-напористый",
};
