import { ASPECTS } from "../../config";
import type { AspectType } from "@types";

const isAspect = (aspect: string | AspectType): aspect is AspectType => {
  return ASPECTS.hasOwnProperty(aspect);
};

export default isAspect;
