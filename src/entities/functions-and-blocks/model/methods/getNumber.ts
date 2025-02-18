import type { HumanFunction } from "@types";
import { FUNCTIONS } from "../../config";

const getNumber = (functionName: HumanFunction) => {
  return FUNCTIONS[functionName].number;
};

export default getNumber;
