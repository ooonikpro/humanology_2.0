import type { CharacteristicType } from "@types";
import { CHARACTERISTICS } from "../../config";

const isValidCharacteristic = (ch: string): ch is CharacteristicType => {
  return CHARACTERISTICS.includes(ch as CharacteristicType);
};

export default isValidCharacteristic;
