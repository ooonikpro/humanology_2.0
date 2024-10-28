import type { CompanionType } from "@types";
import { COMPANION } from "../../config";

const getCompanion = (companion: CompanionType) => {
  return COMPANION[companion];
};

export default getCompanion;
