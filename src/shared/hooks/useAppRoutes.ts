import { appRoutes } from "../../app/constants";

export const APP_ROUTES_KEY = "$appRoutes";

export function useInjectAppRoutes() {
  return inject(APP_ROUTES_KEY) as typeof appRoutes;
}
