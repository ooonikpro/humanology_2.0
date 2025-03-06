import type { IntertypeIdType } from "@types";
import { IMAGES_FOLDER } from "@shared/constants";
import { getImage } from "@shared/lib";

const getIntertypeGraphSrc = (intertypeId: IntertypeIdType) => {
  return getImage(`${IMAGES_FOLDER}/intertype/graph/${intertypeId}.svg`);
};

export default getIntertypeGraphSrc;
