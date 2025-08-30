import type { HumanFunctionType } from "@types";
import getAllDetailFunctions from "./getAllDetailFunctions";

const getDetailFunction = (f: HumanFunctionType | string) => {
  return getAllDetailFunctions().find(({ socionicFn }) => socionicFn === f);
};

export default getDetailFunction;
