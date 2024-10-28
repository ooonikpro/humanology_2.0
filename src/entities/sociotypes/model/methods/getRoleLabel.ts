import type { RoleType } from "@types";
import { ROLES } from "../../config";

const getRoleLabel = (role: RoleType): string => {
  return ROLES[role].label;
};

export default getRoleLabel;
