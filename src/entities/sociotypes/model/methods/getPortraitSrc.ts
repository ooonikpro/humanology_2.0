import type { SociotypeAgeType, SociotypeIdType } from "@types";
import { GenderEnum, IMAGES_FOLDER } from "@shared/constants";
import { getImage } from "@shared/lib";

const getPortraitSrc = (
  id: SociotypeIdType,
  gender: GenderEnum,
  age: SociotypeAgeType = "young",
) => {
  const agePostfix = age === "young" ? "" : `-${age}`;

  return getImage(
    `${IMAGES_FOLDER}/portraits/${id.toLowerCase()}-${gender}${agePostfix}.webp`,
  );
};

export default getPortraitSrc;
