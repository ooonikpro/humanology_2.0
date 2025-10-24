import type { AspectType } from "@types";
import getAllDetailAspects from "./getAllDetailAspects";

const getDetailAspect = (aspect: AspectType | string) => {
  return getAllDetailAspects().find(({ aspect: ch }) => ch === aspect);
};

export default getDetailAspect;
