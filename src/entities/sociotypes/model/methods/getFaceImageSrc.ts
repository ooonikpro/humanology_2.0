import type { SociotypeIdType } from "@types";
import { GenderEnum, IMAGES_FOLDER } from "@shared/constants";

const getFaceImageSrc = (id: SociotypeIdType, gender: GenderEnum) => {
  return `${IMAGES_FOLDER}/faces/${id}-${gender}.png`;
};

export default getFaceImageSrc;
