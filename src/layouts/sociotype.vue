<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardYungs,
  SociotypeCardHeader,
  SociotypeProvider,
  sociotypeModel,
  useSociotypePageRoute,
  SociotypeYungDichtomy,
  SociotypeSignsBlock,
  SociotypeMentality,
  SociotypeReininSigns,
  SociotypeGroupsAndQuadras,
} from "@entities/sociotypes";
import {
  SociotypesPageTitleWidget,
  SociotypesTabsWidget,
} from "@widgets/sociotypes";
import { BlockFunctionsListWidget } from "@widgets/functions-and-blocks";
import DefaultLayout from "./default.vue";

const { sociotypeId, isCardTab } = useSociotypePageRoute();
</script>

<template>
  <DefaultLayout>
    <SociotypeProvider
      v-slot="{ data }"
      :id="sociotypeId"
      class="sociotype-page"
    >
      <SociotypeCard
        :data="data"
        :gender="sociotypeModel.getGenderByYung(data.id)"
        :bordered="!isCardTab"
        isShowToggle
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

      <BlockFunctionsListWidget v-if="isCardTab" :sociotypeId="sociotypeId" />

      <SociotypesTabsWidget />

      <template v-if="isCardTab">
        <SociotypeSignsBlock title="Краткое описание">
          <NuxtPage />
        </SociotypeSignsBlock>
        <SociotypeMentality v-bind="data" />
        <SociotypeGroupsAndQuadras v-bind="data" />
        <SociotypeYungDichtomy v-bind="data" />
        <SociotypeReininSigns v-bind="data" />
      </template>

      <template v-else>
        <SociotypesPageTitleWidget v-if="!isCardTab" />
        <NuxtPage />
      </template>
    </SociotypeProvider>
  </DefaultLayout>
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
