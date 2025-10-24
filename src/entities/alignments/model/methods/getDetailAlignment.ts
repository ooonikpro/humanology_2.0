import type { AlignmentType } from "@types";
import getAllDetailAlignments from "./getAllDetailAlignments";

const getDetailAlignment = (alignment: AlignmentType | string) => {
  return getAllDetailAlignments().find(({ alignment: ch }) => {
    return ch === alignment;
  });
};

export default getDetailAlignment;
