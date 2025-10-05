import type { AspectType } from "@types";

const createBgColorAspectStyle = (aspect: AspectType) => {
  return {
    "--bg-aspect": `var(--bg-aspect-${aspect})`,
  };
};

export default createBgColorAspectStyle;
