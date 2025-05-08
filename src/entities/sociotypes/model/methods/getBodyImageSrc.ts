import type { SociotypeIdType } from "@types";
import { GenderEnum, IMAGES_FOLDER } from "@shared/constants";

const getBodyImageSrc = (id: SociotypeIdType, gender: GenderEnum) => {
  return `${IMAGES_FOLDER}/bodies/${id}-${gender}.png`;
};

export default getBodyImageSrc;
