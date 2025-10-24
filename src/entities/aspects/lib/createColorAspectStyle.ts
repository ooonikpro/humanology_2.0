import type { AspectType } from "@types";

const createColorAspectStyle = (aspect: AspectType) => {
  return {
    "--color-aspect-semitransparent": `var(--color-aspect-${aspect}-semitransparent)`,
    "--color-aspect": `var(--color-aspect-${aspect})`,
  };
};

export default createColorAspectStyle;
