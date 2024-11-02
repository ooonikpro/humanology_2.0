import type { Temperament } from "@types";

import { TEMPERAMENT, TEMPERAMENT_LABEL } from "../../config";

const getTemperanment = (temperament: Temperament) => {
  return {
    type: TEMPERAMENT[temperament],
    label: TEMPERAMENT_LABEL[temperament],
  };
};

export default getTemperanment;
