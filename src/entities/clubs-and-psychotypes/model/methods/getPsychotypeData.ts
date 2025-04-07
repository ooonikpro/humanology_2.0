import type { PsychotypeIdType } from "@types";
import { PSYCHOTYPES } from "../../config";

const getPsychotypeData = (psychotypeId: PsychotypeIdType) => {
  return PSYCHOTYPES[psychotypeId];
};

export default getPsychotypeData;
