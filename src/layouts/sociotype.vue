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
  SociotypeSwitcher,
} from "@entities/sociotypes";
import {
  SociotypesPageTitleWidget,
  SociotypesTabsWidget,
} from "@widgets/sociotypes";
import {
  BlockFunctionsListWidget,
  FunctionInsideBottomSheetWidget,
} from "@widgets/functions-and-blocks";

const { sociotypeId, isCardTab, activeTab } = useSociotypePageRoute();
</script>

<template>
  <NuxtLayout name="default">
    <SociotypeSwitcher
      :sociotype-id="sociotypeId"
      :sociotype-tab-name="activeTab.name"
    />
    <SociotypeProvider
      v-slot="{ data }"
      :id="sociotypeId"
      class="sociotype-page"
    >
      <SociotypeCard
        class="sociotype-page__card"
        :data="data"
        :gender="sociotypeModel.getGenderByYung(data.id)"
        bordered
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

      <BlockFunctionsListWidget v-if="isCardTab" :sociotypeId="data.id" />

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

    <FunctionInsideBottomSheetWidget :sociotype-id="sociotypeId" />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-layout__scroll {
  position: relative;

  display: flex;
  flex-flow: row nowrap;

  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    opacity: 0;
    scroll-behavior: smooth;
  }
}

.sociotype-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: colors.$white;

  scroll-snap-align: center;

  > * {
    touch-action: none;
    -ms-touch-action: none;
  }

  &__card {
    touch-action: manipulation;
    -ms-touch-action: manipulation;
  }
}
</style>
