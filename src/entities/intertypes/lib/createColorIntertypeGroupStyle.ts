import type { IntertypeGroupIdType } from "@types";

const createColorIntertypeGroupStyle = (
  intertypeGroupName: IntertypeGroupIdType,
) => {
  return {
    "--color-intertype-group": `var(--color-intertype-group-${intertypeGroupName})`,
  };
};

export default createColorIntertypeGroupStyle;
