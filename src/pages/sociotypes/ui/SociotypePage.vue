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

import * as config from "../config";
import BlockFunctionsWithModalWidget from "@widgets/functions-and-blocks/BlockFunctionsWithModalWidget.vue";

const route = useRoute("sociotypes");
const tabName = computed(() => route.params.tabName);
const isCardTab = computed(() => toValue(tabName) === "card");

const tabDescription = computed(() =>
  config.TABS.find((row) => row.name === toValue(tabName)),
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
      <BlockFunctionsWithModalWidget :sociotypeId="data.id" blockName="ego" />
      <BlockFunctionsWithModalWidget
        :sociotypeId="data.id"
        blockName="superego"
      />
      <BlockFunctionsWithModalWidget :sociotypeId="data.id" blockName="id" />
      <BlockFunctionsWithModalWidget
        :sociotypeId="data.id"
        blockName="superid"
      />
    </template>

    <SociotypesTabsWidget :tabs="config.TABS" />

    <SociotypesPageTitleWidget
      v-if="!isCardTab && tabDescription"
      :iconName="tabDescription?.iconName"
      :title="tabDescription?.label"
    />

    <component
      :is="config.TABS_COMPONENTS[tabName as config.TabName]"
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
