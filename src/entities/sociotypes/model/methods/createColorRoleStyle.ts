import type { RoleType } from "@types";

import getRoleQuadra from "./getRoleQuadra";

const createColorRoleStyle = (role: RoleType) => {
  return {
    "--color-role": `var(--color-quadra-${getRoleQuadra(role)})`,
  };
};

export default createColorRoleStyle;
