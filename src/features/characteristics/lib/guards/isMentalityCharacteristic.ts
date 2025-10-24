import { MENTALITY_CHARACTERISTIC } from "../../config";
import type { CharacteristicType } from "@types";

type MentalityCharacteristicType = Exclude<
  CharacteristicType,
  | "temperament"
  | "motivation"
  | "character"
  | "communication_style"
  | "companion"
  | "mindset"
  | "worldview"
>;
const isMentalityCharacteristic = (
  characteristic: CharacteristicType | string,
): characteristic is MentalityCharacteristicType => {
  return MENTALITY_CHARACTERISTIC.includes(
    characteristic as CharacteristicType,
  );
};

export default isMentalityCharacteristic;
