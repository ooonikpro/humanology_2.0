import type { AlignmentType } from "@types";
import { ALIGNMENT } from "../../config";

const getAlignment = (alignment: AlignmentType) => {
  return ALIGNMENT[alignment];
};

export default getAlignment;
