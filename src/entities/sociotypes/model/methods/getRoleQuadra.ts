import type { QuadrasType, RoleType } from "@types";
import { ROLES } from "../../config";

const getRoleQuadra = (role: RoleType): QuadrasType => {
  return ROLES[role].quadra;
};

export default getRoleQuadra;
