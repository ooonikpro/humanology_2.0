import type { QuadrasType, RoleType } from "@types";

import getRoleQuadra from "../model/methods/getRoleQuadra";

const createColorGradientStyle = (quadra: QuadrasType, role: RoleType) => {
  const roleQuadra = getRoleQuadra(role);

  return {
    "--color-sociotype-primary": `var(--color-quadra-${quadra})`,
    "--color-sociotype-secondary": `var(--color-quadra-${roleQuadra}${quadra === roleQuadra ? "-dark" : ""})`,
  };
};

export default createColorGradientStyle;
