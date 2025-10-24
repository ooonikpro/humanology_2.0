import type { DichotomyType } from "@types";

const createColorYungStyle = (yung: DichotomyType) => {
  return {
    "--color-yung": `var(--color-yung-${yung})`,
  };
};

export default createColorYungStyle;
