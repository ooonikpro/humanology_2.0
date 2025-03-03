import type { QuadrasType } from "@types";

const createColorQuadraStyle = (quadra: QuadrasType) => {
  return {
    "--color-quadra": `var(--color-quadra-${quadra})`,
    "--color-quadra-dark": `var(--color-quadra-${quadra}-dark)`,
  };
};

export default createColorQuadraStyle;
