import type { SociotypeAgeType, SociotypeIdType } from "@types";
import { GenderEnum, IMAGES_FOLDER } from "@shared/constants";

const getPortraitSrc = (
  id: SociotypeIdType,
  gender: GenderEnum,
  age: SociotypeAgeType = "young",
) => {
  const agePostfix = age === "young" ? "" : `-${age}`;

  return `${IMAGES_FOLDER}/portraits/${id.toLowerCase()}-${gender}${agePostfix}.png`;
};

export default getPortraitSrc;
