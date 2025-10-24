import type { PsychotypeIdType } from "@types";
import getAllDetailPsychotypes from "./getAllDetailPsychotypes";

const getDetailPsychotype = (psychotypeId: PsychotypeIdType | string) => {
  return getAllDetailPsychotypes().find(({ psychotype }) => {
    return psychotypeId === psychotype;
  });
};

export default getDetailPsychotype;
