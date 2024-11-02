import type { Mindset } from "@types";
import { MINDSET } from "@entities/sociotypes/config";

const getMindset = (mindset: Mindset) => {
  return MINDSET[mindset];
};

export default getMindset;
