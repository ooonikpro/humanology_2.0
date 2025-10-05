import type { AspectType, IconNameType } from "@types";

const getAspectElementIcon = (aspect: AspectType): IconNameType => {
  return `aspect_${aspect}_element`;
};

export default getAspectElementIcon;
