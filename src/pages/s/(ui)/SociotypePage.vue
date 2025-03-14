<script lang="ts" setup>
import { useRoute } from "vue-router";
import type { SociotypeIdType } from "@types";
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardYungs,
  SociotypeCardHeader,
  SociotypeProvider,
  sociotypeModel,
} from "@entities/sociotypes";
import {
  SociotypesTabsWidget,
  SociotypesPageTitleWidget,
} from "@widgets/sociotypes";
import { BlockFunctionsListWidget } from "@widgets/functions-and-blocks";

import * as config from "../(config)";

const route = useRoute();

const sociotypeId = computed(() => route.params.id as SociotypeIdType);

const tabName = computed(
  () => route.params.tabName ?? config.DEFAULT_PAGE_TAB_NAME,
);

const isCardTab = computed(
  () => toValue(tabName) === config.DEFAULT_PAGE_TAB_NAME,
);

const tabDescription = computed(() =>
  config.SOCIOTYPE_PAGE_TABS.find((row) => row.name === toValue(tabName)),
);
</script>

<template>
  <SociotypeProvider v-slot="{ data }" :id="sociotypeId" class="sociotype-page">
    <SociotypeCard
      :data="data"
      :gender="sociotypeModel.getGenderByYung(data.id)"
      isShowToggle
      :bordered="!isCardTab"
    >
      <template #header>
        <SociotypeCardHeader :data="data" />
      </template>

      <template #groups-and-quadras v-if="isCardTab">
        <SociotypeCardGroupsAndQuadras v-bind="data" />
      </template>

      <template #yungs v-if="isCardTab">
        <SociotypeCardYungs v-bind="data" />
      </template>
    </SociotypeCard>

    <template v-if="isCardTab">
      <BlockFunctionsListWidget :sociotypeId="sociotypeId" />
    </template>

    <SociotypesTabsWidget
      :sociotypeId="sociotypeId"
      :tabName="tabName"
      :tabs="config.SOCIOTYPE_PAGE_TABS"
    />

    <SociotypesPageTitleWidget
      v-if="!isCardTab && tabDescription"
      :iconName="tabDescription?.iconName"
      :title="tabDescription?.label"
    />

    <component
      :is="config.SOCIOTYPE_PAGE_TABS_COMPONENTS[tabName]"
      :data="data"
    />
  </SociotypeProvider>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: colors.$white;
}
</style>
