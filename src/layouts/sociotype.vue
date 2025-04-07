<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardYungs,
  SociotypeCardHeader,
  SociotypeProvider,
  sociotypeModel,
  useSociotypePageRoute,
  SociotypeYungDichtomy,
  SociotypeSignsBlock,
  SociotypeMentality,
  SociotypeReininSigns,
} from "@entities/sociotypes";
import { SociotypeCarousel } from "@features/sociotypes";
import {
  SociotypesPageTitleWidget,
  SociotypesTabsWidget,
  SociotypesGroupsAndQuadrasWidget,
  SociotypesCardGroupsAndQuadrasWidget,
} from "@widgets/sociotypes";
import {
  BlockFunctionsListWidget,
  FunctionInsideBottomSheetWidget,
} from "@widgets/functions-and-blocks";
import UiLoadSociotypePageComponent from "@shared/ui/UiLoadSociotypePageComponent.vue";

const { sociotypeId, activeTab, isCardTab } = useSociotypePageRoute();
</script>

<template>
  <NuxtLayout name="default">
    <SociotypeCarousel v-slot="carouselData">
      <SociotypeProvider
        v-slot="{ data }"
        :id="carouselData.sociotypeId"
        class="sociotype-layout"
      >
        <SociotypeCard
          class="sociotype-layout__card"
          :data="data"
          :gender="sociotypeModel.getGenderByYung(data.id)"
          bordered
          isShowToggle
        >
          <template #header>
            <SociotypeCardHeader :data="data" />
          </template>

          <template #groups-and-quadras v-if="isCardTab">
            <SociotypesCardGroupsAndQuadrasWidget v-bind="data" />
          </template>

          <template #yungs v-if="isCardTab">
            <SociotypeCardYungs v-bind="data" />
          </template>
        </SociotypeCard>

        <BlockFunctionsListWidget v-if="isCardTab" :sociotypeId="data.id" />

        <SociotypesTabsWidget />

        <template v-if="isCardTab">
          <SociotypeSignsBlock title="Краткое описание">
            <NuxtPage v-if="carouselData.isCurrent" />
            <UiLoadSociotypePageComponent
              v-else
              :sociotype-id="carouselData.sociotypeId"
              :tab-name="activeTab.name"
            />
          </SociotypeSignsBlock>
          <SociotypeMentality v-bind="data" />
          <SociotypesGroupsAndQuadrasWidget v-bind="data" />
          <SociotypeYungDichtomy v-bind="data" />
          <SociotypeReininSigns v-bind="data" />
        </template>

        <template v-else>
          <SociotypesPageTitleWidget v-if="!isCardTab" />
          <NuxtPage v-if="carouselData.isCurrent" />
          <UiLoadSociotypePageComponent
            v-else
            :sociotype-id="carouselData.sociotypeId"
            :tab-name="activeTab.name"
          />
        </template>
      </SociotypeProvider>
    </SociotypeCarousel>

    <FunctionInsideBottomSheetWidget :sociotype-id="sociotypeId" />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
.sociotype-layout {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: colors.$white;
}
</style>
