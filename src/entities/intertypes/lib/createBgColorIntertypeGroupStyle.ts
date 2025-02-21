import type { IntertypeGroupIdType } from "@types";

const createBgColorIntertypeGroupStyles = (
  intertypeGroupName: IntertypeGroupIdType,
) => {
  return {
    "--bg-intertype-group": `var(--bg-intertype-group-${intertypeGroupName})`,
  };
};

export default createBgColorIntertypeGroupStyles;
