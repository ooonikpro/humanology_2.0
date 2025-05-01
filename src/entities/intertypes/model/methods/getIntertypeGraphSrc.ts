import type { IntertypeIdType } from "@types";
import { IMAGES_FOLDER } from "@shared/constants";

const getIntertypeGraphSrc = (intertypeId: IntertypeIdType) => {
  return `${IMAGES_FOLDER}/intertype/graph/${intertypeId}.svg`;
};

export default getIntertypeGraphSrc;
