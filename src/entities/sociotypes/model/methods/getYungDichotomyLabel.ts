import type { DichotomyType } from "@types";
import { YUNGS_DICHTOMIES } from "../../config";

const getYungDichotomyLabel = (yung: DichotomyType): string => {
  return YUNGS_DICHTOMIES[yung];
};

export default getYungDichotomyLabel;
