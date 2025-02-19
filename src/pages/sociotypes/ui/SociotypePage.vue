<script lang="ts" setup>
import { computed, toValue } from "vue";
import { useRoute } from "@kitbag/router";
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardYungs,
  SociotypeCardHeader,
  SociotypeProvider,
} from "@entities/sociotypes";
import {
  SociotypesTabsWidget,
  SociotypesPageTitleWidget,
} from "@widgets/sociotypes";
import { BlockFunctionsWidget } from "@widgets/functions-and-blocks";

import * as config from "../config";

const route = useRoute("sociotypes");
const tabName = computed(() => route.params.tabName);
const isCardTab = computed(() => toValue(tabName) === "card");

const tabDescription = computed(() =>
  config.SOCIOTYPE_PAGE_TABS.find((row) => row.name === toValue(tabName)),
);
</script>

<template>
  <SociotypeProvider
    v-slot="{ data }"
    :id="route.params.id"
    class="sociotype-page"
  >
    <SociotypeCard :data="data">
      <template #header>
        <SociotypeCardHeader :data="data" />
      </template>

      <template #groups-and-quadras>
        <SociotypeCardGroupsAndQuadras v-if="isCardTab" v-bind="data" />
      </template>

      <template #yungs>
        <SociotypeCardYungs v-if="isCardTab" v-bind="data" />
      </template>
    </SociotypeCard>

    <template v-if="isCardTab">
      <div class="sociotype-page__functions">
        <BlockFunctionsWidget
          v-for="blockName in config.BLOCKS_ORDER"
          :key="blockName"
          :sociotypeId="data.id"
          :blockName="blockName"
        />
      </div>
    </template>

    <SociotypesTabsWidget :tabs="config.SOCIOTYPE_PAGE_TABS" />

    <SociotypesPageTitleWidget
      v-if="!isCardTab && tabDescription"
      :iconName="tabDescription?.iconName"
      :title="tabDescription?.label"
    />

    <component
      :is="config.SOCIOTYPE_PAGE_TABS_COMPONENTS[tabName as config.TabName]"
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

  &__functions {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
