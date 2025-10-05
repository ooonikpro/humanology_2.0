import type { RouteLocationRaw } from "vue-router";
import type { IconNameType } from "@types";

export type NavigationTabPropsType = {
  to: RouteLocationRaw;
  iconName?: IconNameType;
  label?: string;
  isColumn?: boolean;
};
