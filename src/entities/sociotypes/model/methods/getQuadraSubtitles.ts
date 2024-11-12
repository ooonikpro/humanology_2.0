import type { QuadrasType } from "@types";
import { QUADRAS_SUBTITLE } from "../../config";

const getQuadraSubtitles = (quadra: QuadrasType) => {
  return QUADRAS_SUBTITLE[quadra];
};

export default getQuadraSubtitles;
