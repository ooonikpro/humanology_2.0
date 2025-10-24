<script lang="ts" setup>
import {
  SociotypeCard,
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
import { DismissibleInfo } from "@features/dismissible-info";
import {
  SociotypesPageTitleWidget,
  SociotypesTabsWidget,
  SociotypesGroupsAndQuadrasWidget,
  SociotypesCardGroupsAndQuadrasWidget,
  CharacteristicInsideBottomSheetWidget,
} from "@widgets/sociotypes";
import {
  BlockFunctionsListWidget,
  FunctionInsideBottomSheetWidget,
} from "@widgets/functions-and-blocks";

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
          :data="data"
          :gender="sociotypeModel.getGenderByYung(data.id)"
          :isShowToggle="isCardTab"
          class="sociotype-layout__card"
          bordered
        >
          <template #header>
            <SociotypeCardHeader :data="data" />
          </template>

          <template v-if="isCardTab" #groups-and-quadras>
            <SociotypesCardGroupsAndQuadrasWidget
              v-bind="data"
              :showPopulation="true"
            />
          </template>
        </SociotypeCard>

        <BlockFunctionsListWidget v-if="isCardTab" :sociotypeId="data.id" />

        <SociotypesTabsWidget />

        <template v-if="isCardTab">
          <SociotypeSignsBlock title="Краткое описание">
            <DismissibleInfo storage-key="sociotypes-precision-info">
              <UiText preset="large" color="black">О точности описаний</UiText>
              <UiText preset="body" color="black">
                Описания — ориентиры, а не ярлыки. Не всё совпадёт с каждым.
                Сверяйте с наблюдениями и независимыми оценками.
              </UiText>
            </DismissibleInfo>
            <NuxtPage v-if="carouselData.isCurrent" />
            <UiLoadSociotypePageComponent
              v-else
              :sociotype-id="carouselData.sociotypeId"
              :tab-name="activeTab.name"
            />
          </SociotypeSignsBlock>
          <SociotypeMentality v-bind="data" />
          <SociotypesGroupsAndQuadrasWidget v-bind="data" />
          <SociotypeYungDichtomy :yungs="data.yungs" :id="data.id" />
          <SociotypeReininSigns :reinin="data.reinin" :id="data.id" />
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

    <CharacteristicInsideBottomSheetWidget :sociotype-id="sociotypeId" />
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

  &__card {
    cursor: pointer;
  }
}
</style>
