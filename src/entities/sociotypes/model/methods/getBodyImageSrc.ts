import type { SociotypeIdType } from "@types";
import { GenderEnum, IMAGES_FOLDER } from "@shared/constants";
import { getImage } from "@shared/lib";

const getBodyImageSrc = (id: SociotypeIdType, gender: GenderEnum) => {
  return getImage(`${IMAGES_FOLDER}/bodies/${id}-${gender}.png`);
};

export default getBodyImageSrc;
