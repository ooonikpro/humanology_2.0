import type { QuadrasType } from "@types";
import getAllDetailQuadras from "./getAllDetailQuadras";

const getDetailQuadra = (quadra: QuadrasType | string) => {
  return getAllDetailQuadras().find(({ quadra: ch }) => {
    return ch === quadra;
  });
};

export default getDetailQuadra;
