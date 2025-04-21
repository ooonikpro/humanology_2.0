import type { ReininSignType } from "@types";
import { REININ_SIGNS_LABEL } from "../../config";
import getOppositeReinin from "./getOppositeReinin";

const getOppositeReininLabel = (reinin: ReininSignType) => {
  return REININ_SIGNS_LABEL[getOppositeReinin(reinin)];
};

export default getOppositeReininLabel;
