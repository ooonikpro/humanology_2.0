import type { AspectType, IconNameType } from "@types";

const getAspectIconName = (aspect: AspectType) => {
  return `aspect_${aspect}` as IconNameType;
};

export default getAspectIconName;
