<script lang="ts" setup>
import { computed, toValue } from "vue";
import { useRoute } from "vue-router";
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
import {
  BlockFunctionsWidget,
  FunctionInsideBottomSheetWidget,
} from "@widgets/functions-and-blocks";

import * as config from "../config";
import FunctionDescription from "@pages/sociotypes/ui/functions/FunctionDescription.vue";

const route = useRoute();

const sociotypeId = computed(() => route.params.id);

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

  <FunctionInsideBottomSheetWidget v-slot="propsData">
    <FunctionDescription v-bind="propsData" />
  </FunctionInsideBottomSheetWidget>
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
