import type { TarotType } from "@types";
import getAllDetailSuits from "./getAllDetailSuits";

const getDetailSuit = (suit: TarotType | string) => {
  return getAllDetailSuits().find(({ suit: ch }) => ch === suit);
};

export default getDetailSuit;
