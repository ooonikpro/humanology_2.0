import type { QuadrasType } from "@types";

const createColorQuadraStyle = (quadra: QuadrasType) => {
  return {
    "--color-quadra": `var(--color-quadra-${quadra})`,
  };
};

export default createColorQuadraStyle;
