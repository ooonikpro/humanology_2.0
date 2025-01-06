import type { RegisteredRouter } from "@kitbag/router";
import type { IconNameType } from "@types";

export type NavigationTabPropsType = {
  to: (resolve: RegisteredRouter["resolve"]) => string;
  iconName: IconNameType;
  label: string;
};
