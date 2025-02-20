import { ASPECTS } from "../../config";
import type { AspectType } from "@types";

const getAllAspects = (): AspectType[] => {
  return Object.keys(ASPECTS) as AspectType[];
};

export default getAllAspects;
