import type { HumanFunctionType } from "@types";
import { FUNCTIONS } from "../../config";

const getNumber = (functionName: HumanFunctionType) => {
  return FUNCTIONS[functionName].number;
};

export default getNumber;
