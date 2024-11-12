import type { TemperamentType } from "@types";
import { TEMPERAMENT, TEMPERAMENT_LABEL, TEMPERAMENT_LVL } from "../../config";

const getTemperament = (temperament: TemperamentType) => {
  return {
    type: TEMPERAMENT[temperament],
    label: TEMPERAMENT_LABEL[temperament],
    lvl: TEMPERAMENT_LVL[temperament],
  };
};

export default getTemperament;
