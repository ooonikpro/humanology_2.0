import type { MindsetType } from "@types";
import getAllDetailMinds from "./getAllDetailMinds";

const getDetailMind = (mindset: MindsetType | string) => {
  return getAllDetailMinds().find(({ mindset: ch }) => ch === mindset);
};

export default getDetailMind;
