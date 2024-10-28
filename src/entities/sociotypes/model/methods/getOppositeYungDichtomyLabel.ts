import type { DichotomyType } from "@types";
import { YUNGS_DICHTOMIES_LABEL, YUNGS_DICHTOMIES_MIRROR } from "../../config";

const getOppositeYungDichtomyLabel = (yung: DichotomyType) => {
  return YUNGS_DICHTOMIES_LABEL[YUNGS_DICHTOMIES_MIRROR[yung]];
};

export default getOppositeYungDichtomyLabel;
