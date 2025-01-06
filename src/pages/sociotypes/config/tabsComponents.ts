import type { AsyncComponentLoader, Component } from "vue";
import type { TabName } from "./tabs";

import CardTab from "../ui/tabs/card";
import HowToDefineTab from "../ui/tabs/how-to-define";
import DescriptionTab from "../ui/tabs/description";
import CompatibilityTab from "../ui/tabs/compatibility";
import PeopleTab from "../ui/tabs/people";
import BusinessQualitiesTab from "../ui/tabs/business-qualities";
import ProgressTab from "../ui/tabs/progress";
import HumorTab from "../ui/tabs/humor";
import HistoryTab from "../ui/tabs/history";

const SOCIOTYPE_PAGE_TABS_COMPONENTS: Record<
  TabName,
  Component | AsyncComponentLoader
> = {
  card: CardTab,
  "how-to-define": HowToDefineTab,
  description: DescriptionTab,
  compatibility: CompatibilityTab,
  people: PeopleTab,
  "business-qualities": BusinessQualitiesTab,
  progress: ProgressTab,
  humor: HumorTab,
  history: HistoryTab,
};

export default SOCIOTYPE_PAGE_TABS_COMPONENTS;
