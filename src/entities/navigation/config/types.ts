import type { IconNameType } from "@types";
import type { RegisteredRouter } from "@kitbag/router";

export type NavigationTabPropsType = {
  to: (resolve: RegisteredRouter['resolve']) => string;
  iconName: IconNameType;
  label: string;
};
