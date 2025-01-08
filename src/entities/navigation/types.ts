import type { ToCallback } from "@kitbag/router";
import type { IconNameType } from "@types";

export type NavigationTabPropsType = {
  to: ToCallback;
  iconName: IconNameType;
  label: string;
};
