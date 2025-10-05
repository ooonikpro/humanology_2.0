import type { DichotomyType } from "@types";

const createBgColorYungStyle = (yung: DichotomyType) => {
  return {
    "--bg-yung": `var(--bg-yung-${yung})`,
  };
};

export default createBgColorYungStyle;
