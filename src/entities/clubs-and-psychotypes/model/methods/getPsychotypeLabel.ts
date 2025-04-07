import type { PsychotypeIdType } from "@types";
import getPsychotypeData from "./getPsychotypeData";

const getPsychotypeLabel = (psychotypeId: PsychotypeIdType): string => {
  return getPsychotypeData(psychotypeId).label;
};

export default getPsychotypeLabel;
