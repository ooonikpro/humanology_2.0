import type { QuadrasType } from "@types";
import { QUADRAS_LABEL } from "../../config";

const getQuadraLabel = (qudra: QuadrasType): string => {
  return QUADRAS_LABEL[qudra];
};

export default getQuadraLabel;
