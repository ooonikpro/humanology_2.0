import type { AspectType } from "@types";
import { ASPECTS_TAGS } from "../../config";

const getAspectTags = (aspect: AspectType) => {
  return ASPECTS_TAGS[aspect];
};

export default getAspectTags;
