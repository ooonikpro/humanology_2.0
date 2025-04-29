import type { DichotomyType } from "@types";
import { YUNGS_DICHTOMIES_LABEL, YUNGS_DICHTOMIES_MIRROR } from "../../config";
import getOppositeYungDichotomy from "./getOppositeYungDichotomy";

const getOppositeYungDichtomyLabel = (yung: DichotomyType) => {
  return YUNGS_DICHTOMIES_LABEL[getOppositeYungDichotomy(yung)];
};

export default getOppositeYungDichtomyLabel;
