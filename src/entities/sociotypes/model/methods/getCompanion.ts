import type { Companion } from "@types";
import { COMPANION } from "@entities/sociotypes/config/companion";

const getCompanion = (companion: Companion) => {
  return COMPANION[companion];
};

export default getCompanion;
