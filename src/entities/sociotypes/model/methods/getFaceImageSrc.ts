import type { SociotypeIdType } from "@types";
import { GenderEnum, IMAGES_FOLDER } from "@shared/constants";
import { getImage } from "@shared/lib";

const getFaceImageSrc = (id: SociotypeIdType, gender: GenderEnum) => {
  return getImage(`${IMAGES_FOLDER}/faces/${id}-${gender}.png`);
};

export default getFaceImageSrc;
