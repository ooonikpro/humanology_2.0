import type { AspectType } from "@types";
import { ASPECTS_LABEL } from "../../config";

const getAspectLabel = (aspect: AspectType) => {
  return ASPECTS_LABEL[aspect];
};

export default getAspectLabel;
