import type { SociotypeTabNameType } from "@types";
import { SOCIOTYPE_PAGE_TABS } from "@pages/sociotypes";
import { isSociotypeId } from "@entities/sociotypes";
import type { SociotypesRoutesTypes } from "../routesTypedMap";
import type { MiddlewareType } from "./types";

const sociotypeIdParam = (id: string) => {
  const preparedId = id.toUpperCase();

  if (!isSociotypeId(preparedId)) {
    return false;
  }

  return preparedId;
};

const sociotypeTabNameParam = (tabName: string) => {
  const foundTab = SOCIOTYPE_PAGE_TABS.find(
    (tabItem) => tabItem.name === tabName,
  );

  if (!foundTab) {
    return SOCIOTYPE_PAGE_TABS[0].name;
  }

  return tabName as SociotypeTabNameType;
};

export const sociotypeIdMiddleware: MiddlewareType = (to, from, next) => {
  if (to.name === "card") {
    const { id: expectedId } =
      to.params as SociotypesRoutesTypes["card"]["params"];
    const id = sociotypeIdParam(expectedId);
    const isValidSociotypeId = id === expectedId;
    if (id) {
      if (!isValidSociotypeId) next({ name: "card", params: { id } });
      else next();
      return true;
    }
    return false;
  }
};

export const sociotypeTabNameMiddleware: MiddlewareType = (to, from, next) => {
  if (to.name === "sociotypes") {
    const { id, tabName: expectedTabName } =
      to.params as SociotypesRoutesTypes["sociotypes"]["params"];
    const tabName = sociotypeTabNameParam(expectedTabName);
    const isValidTabName = tabName === expectedTabName;
    if (sociotypeIdParam(id) && !isValidTabName) {
      next({
        name: "sociotypes",
        params: {
          id,
          tabName,
        },
      });
      return true;
    }
    // Если tabName валидный
    if (sociotypeIdParam(id)) {
      next();
      return true;
    }
    // Если sociotypeId невалидный
    return false;
  }
};

export const sociotypeKidsCardIdMiddleware: MiddlewareType = (
  to,
  from,
  next,
) => {
  if (to.name === "kids.card") {
    const { id: expectedId } =
      to.params as SociotypesRoutesTypes["kids.card"]["params"];
    const id = sociotypeIdParam(expectedId);
    const isValidSociotypeId = id === expectedId;
    if (id) {
      if (!isValidSociotypeId) next({ name: "kids.card", params: { id } });
      else next();
      return true;
    }
    return false;
  }
};
