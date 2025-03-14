import { useRoute } from "vue-router";

import { SOCIOTYPE_CARD_TAB, SOCIOTYPE_PAGE_TABS } from "../../config";
import parseSociotypeRoute from "../parseSociotypeRoute";

const useSociotypePageRoute = () => {
  const route = useRoute();

  const routeParams = computed(() => parseSociotypeRoute(route.path));

  const sociotypeId = computed(() => toValue(routeParams).id);

  const activeTab = computed(
    () =>
      SOCIOTYPE_PAGE_TABS.find(
        (row) => row.name === toValue(routeParams).tabName,
      ) ?? SOCIOTYPE_CARD_TAB,
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
