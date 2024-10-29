import type { ReininSignType } from "@types";
import { REININ_SIGNS_LABEL } from "../../config";

const getReininLabel = (reinin: ReininSignType) => {
  return REININ_SIGNS_LABEL[reinin];
};

export default getReininLabel;
