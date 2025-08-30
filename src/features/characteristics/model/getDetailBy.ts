import type { CharacteristicType, DetailValueType } from "@types";
import { detailGetters } from "../config";

const getDetailBy = (
  characteristic: CharacteristicType,
  value: DetailValueType | string,
) => {
  const detailGetter = detailGetters[characteristic];
  return detailGetter(value);
};

export default getDetailBy;
