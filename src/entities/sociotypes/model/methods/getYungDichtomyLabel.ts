import type { DichotomyType } from "@types";
import { YUNGS_DICHTOMIES_LABEL } from "../../config";

const getYungDichtomyLabel = (yung: DichotomyType): string => {
  return YUNGS_DICHTOMIES_LABEL[yung];
};

export default getYungDichtomyLabel;
