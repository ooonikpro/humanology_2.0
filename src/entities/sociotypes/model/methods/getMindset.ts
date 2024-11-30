import type { MindsetType } from "@types";
import { MINDSET } from "../../config";

const getMindset = (mindset: MindsetType) => {
  return MINDSET[mindset];
};

export default getMindset;
