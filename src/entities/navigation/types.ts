import type { RegisteredRouter, ResolvedRoute, Url } from "@kitbag/router";
import type { IconNameType } from "@types";

export type NavigationTabPropsType = {
  to: (resolve: RegisteredRouter["resolve"]) => ResolvedRoute | Url | undefined;
  iconName: IconNameType;
  label: string;
};
