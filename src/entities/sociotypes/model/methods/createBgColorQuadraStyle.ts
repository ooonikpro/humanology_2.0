import type { QuadrasType } from "@types";

const createBgColorQuadraStyle = (quadra: QuadrasType) => {
  return {
    "--bg-quadra": `var(--bg-quadra-${quadra})`,
  };
};

export default createBgColorQuadraStyle;
