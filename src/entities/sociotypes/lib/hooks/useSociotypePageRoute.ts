import { useRoute } from "vue-router";
import type { SociotypeIdType } from "@types";

import { SOCIOTYPE_CARD_TAB, SOCIOTYPE_PAGE_TABS } from "../../config";
import parseSociotypeRoute from "../parseSociotypeRoute";

const useSociotypePageRoute = () => {
  const route = useRoute();

  const routeParams = computed(() => parseSociotypeRoute(route.path));

  const sociotypeId = computed<SociotypeIdType>(
    (oldId) => routeParams.value.id ?? oldId,
  );
  const tabName = computed<string>(
    (oldTabName) => routeParams.value.tabName ?? oldTabName,
  );

  const activeTab = computed(
    () =>
      SOCIOTYPE_PAGE_TABS.find((row) => row.name === toValue(tabName)) ??
      SOCIOTYPE_CARD_TAB,
  );

  const isCardTab = computed(
    () => toValue(activeTab).name === SOCIOTYPE_CARD_TAB.name,
  );

  const activeTabIndex = computed(() =>
    SOCIOTYPE_PAGE_TABS.findIndex(
      (tab) => tab.name === toValue(activeTab).name,
    ),
  );

  return {
    sociotypeId,
    activeTab,
    isCardTab,
    activeTabIndex,
  };
};

export default useSociotypePageRoute;
