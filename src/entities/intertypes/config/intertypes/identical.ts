import type { IntertypeDataType } from "@types";

const IDENTICAL: IntertypeDataType = {
  id: "identical",
  name: "Тождественные",
  alternativeName: "Самооценка",
  shortDescription: "Понимание, но неумение помочь",
  lvl: "+1",
  positiveTags: [
    "Самооценка",
    "Ясность",
    "Легкое общение",
    "Быстрое и простое взаимопонимание",
    "Спокойствие",
    "Общность взглядов и ценностей",
    "Легкая передача опыта и знаний",
  ],
  negativeTags: [
    "Однообразие",
    "Скука",
    "Чувство пустоты и одиночества",
    "Угнетенность",
    "Депрессия",
  ],
};

export default IDENTICAL;
