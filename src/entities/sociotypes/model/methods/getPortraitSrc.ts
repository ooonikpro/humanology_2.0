import type { SociotypeIdType } from "@types";
import { GenderEnum, IMAGES_FOLDER } from "@shared/constants";

const getPortraitSrc = (id: SociotypeIdType, gender: GenderEnum) => {
  return `${IMAGES_FOLDER}/portraits/${id.toLowerCase()}-${gender}.png`;
};

export default getPortraitSrc;
