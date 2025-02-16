import type { IntertypeRelationsGroupNameType } from "@types";

const createBgColorIntertypeGroupStyles = (
  intertypeGroupName: IntertypeRelationsGroupNameType,
) => {
  return {
    "--bg-intertype-group": `var(--bg-intertype-group-${intertypeGroupName})`,
  };
};

export default createBgColorIntertypeGroupStyles;
