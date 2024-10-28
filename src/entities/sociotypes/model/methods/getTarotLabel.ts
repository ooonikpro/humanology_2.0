import type { TarotType } from "@types";
import { TAROT } from "../../config";

const getTarotLabel = (tarot: TarotType): string => {
  return TAROT[tarot];
};

export default getTarotLabel;
