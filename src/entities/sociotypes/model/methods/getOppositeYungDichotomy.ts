import { YUNGS_DICHTOMIES_MIRROR } from "@entities/sociotypes/config";
import type { DichotomyType } from "@types";

const getOppositeYungDichotomy = (yung: DichotomyType) => {
  return YUNGS_DICHTOMIES_MIRROR[yung];
};

export default getOppositeYungDichotomy;
