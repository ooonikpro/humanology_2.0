import type { ClubDataType } from "@types";

const HUMANITARIAN: ClubDataType = {
  id: "humanitarian",
  label: "Гуманитарий",
  tags: ["Этики", "Интуиты", "Аристократы"],
  title: "Гуманитарии",
  subtitle:
    "Культура и искусство, актёрская деятельность, психология, реклама и общественные отношения.",
  description: [
    "В первую очередь разбираются в психологии людей и их духовных потребностях.",
  ],
} as const;

export default HUMANITARIAN;
