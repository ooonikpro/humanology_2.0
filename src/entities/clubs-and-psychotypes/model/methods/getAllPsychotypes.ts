import type { PsychotypeIdType } from "@types";
import { PSYCHOTYPES } from "../../config";

const getAllPsychotypes = (): PsychotypeIdType[] => {
  return Object.keys(PSYCHOTYPES) as PsychotypeIdType[];
};

export default getAllPsychotypes;
