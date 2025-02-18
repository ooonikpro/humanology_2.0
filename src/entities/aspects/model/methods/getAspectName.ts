import type { AspectType } from "@types";
import { ASPECTS } from "../../config/aspects";

const getAspectName = (aspect: AspectType) => {
  return ASPECTS[aspect];
};

export default getAspectName;
