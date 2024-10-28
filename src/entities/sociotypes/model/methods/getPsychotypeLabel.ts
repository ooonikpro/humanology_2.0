import type { PsychotypeType } from "@types";
import { PSYCHOTYPES } from "../../config";

const getPsychotypeLabel = (psychotype: PsychotypeType): string => {
  return PSYCHOTYPES[psychotype];
};

export default getPsychotypeLabel;
