import type { RoleType } from "@types";

import getRoleQuadra from "../model/methods/getRoleQuadra";

const createColorRoleStyle = (role: RoleType) => {
  return {
    "--color-role": `var(--color-quadra-${getRoleQuadra(role)})`,
  };
};

export default createColorRoleStyle;
