import type { DichotomyType } from "@types";
import getAllDetailYungs from "./getAllDetailYungs";

const getDetailYung = (dichotomy: DichotomyType | string) => {
  return getAllDetailYungs().find(({ yung }) => yung === dichotomy);
};

export default getDetailYung;
