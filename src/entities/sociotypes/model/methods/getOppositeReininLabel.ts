import type { ReininSignType } from "@types";
import { REININ_SIGNS_LABEL, REININ_SIGNS_MIRROR } from "../../config";

const getOppositeReininLabel = (reinin: ReininSignType) => {
  return REININ_SIGNS_LABEL[REININ_SIGNS_MIRROR[reinin]];
};

export default getOppositeReininLabel;
