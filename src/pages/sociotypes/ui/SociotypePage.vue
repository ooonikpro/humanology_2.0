<script lang="ts" setup>
import { computed, toValue } from "vue";
import { useRoute } from "@kitbag/router";
import {
  SociotypeCard,
  SociotypeCardBody,
  SociotypeCardFooter,
} from "@entities/sociotypes";
import SociotypeProvider from "@entities/sociotypes/ui/SociotypeProvider.vue";
import SociotypesTabsWidget from "@widgets/sociotypes/SociotypesTabsWidget.vue";

import * as config from "../config";
import SociotypesPageTitleWidget from "@widgets/sociotypes/SociotypesPageTitleWidget.vue";

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
      <template #body>
        <SociotypeCardBody v-if="isCardTab" v-bind="data" />
      </template>

      <template #footer>
        <SociotypeCardFooter v-if="isCardTab" v-bind="data" />
      </template>
    </SociotypeCard>

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
