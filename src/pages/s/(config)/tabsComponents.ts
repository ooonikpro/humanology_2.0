import type { TabName } from "./tabs";

import CardTab from "@pages/s/(ui)/tabs/card";
import HowToDefineTab from "@pages/s/(ui)/tabs/how-to-define";
import DescriptionTab from "@pages/s/(ui)/tabs/description";
import CompatibilityTab from "@pages/s/(ui)/tabs/compatibility";
import PeopleTab from "@pages/s/(ui)/tabs/people";
import BusinessQualitiesTab from "@pages/s/(ui)/tabs/business-qualities";
import ProgressTab from "@pages/s/(ui)/tabs/progress";
import HumorTab from "@pages/s/(ui)/tabs/humor";
import HistoryTab from "@pages/s/(ui)/tabs/history";

export const SOCIOTYPE_PAGE_TABS_COMPONENTS: Record<
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
