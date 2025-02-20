import { FUNCTIONS } from "../../config";
import type { HumanFunctionType } from "@types";

const getAllFunctions = (): HumanFunctionType[] => {
  return Object.keys(FUNCTIONS) as HumanFunctionType[];
};

export default getAllFunctions;
