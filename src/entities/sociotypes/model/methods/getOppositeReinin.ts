import type { ReininSignType } from "@types";
import { REININ_SIGNS_MIRROR } from "../../config";

const getOppositeReinin = (reinin: ReininSignType) => {
  return REININ_SIGNS_MIRROR[reinin];
};

export default getOppositeReinin;
