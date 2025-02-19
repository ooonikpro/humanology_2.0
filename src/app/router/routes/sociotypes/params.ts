import { createParam } from "@kitbag/router";
import { isSociotypeId } from "@entities/sociotypes";

import { SOCIOTYPE_PAGE_TABS } from "@pages/sociotypes";

export const sociotypeIdParam = createParam((id, { invalid }) => {
  const preparedId = id.toUpperCase();

  if (!isSociotypeId(preparedId)) {
    throw invalid("Некорректный параметр sociotypeId");
  }

  return preparedId;
});

export const sociotypeTabNameParam = createParam((tabName: string) => {
  const foundTab = SOCIOTYPE_PAGE_TABS.find(
    (tabItem) => tabItem.name === tabName,
  );

  if (!foundTab) {
    return SOCIOTYPE_PAGE_TABS[0].name;
  }

  return tabName;
});
