import type { RoleType } from "@types";
import getAllDetailRoles from "./getAllDetailRoles";

const getDetailRole = (role: RoleType | string) => {
  return getAllDetailRoles().find(({ role: ch }) => ch === role);
};

export default getDetailRole;
