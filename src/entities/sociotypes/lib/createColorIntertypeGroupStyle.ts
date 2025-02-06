import type { IntertypeRelationsGroupNameType } from "@types";

const createColorIntertypeGroupStyle = (
  intertypeGroupName: IntertypeRelationsGroupNameType,
) => {
  return {
    "--color-intertype-group": `var(--color-intertype-group-${intertypeGroupName})`,
  };
};

export default createColorIntertypeGroupStyle;
