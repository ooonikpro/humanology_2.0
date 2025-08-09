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
  CharacteristicInsideBottomSheetWidget,
} from "@widgets/sociotypes";
import {
  BlockFunctionsListWidget,
  FunctionInsideBottomSheetWidget,
} from "@widgets/functions-and-blocks";
import UiDismissibleInfo from "@shared/ui/UiDismissibleInfo.vue";

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
          style="margin-top: 8px;"
          bordered
        >
          <template #header>
            <SociotypeCardHeader :data="data" />
          </template>

          <template v-if="isCardTab" #groups-and-quadras>
            <div class="sociotype-card__groups-quadras">
              <SociotypesCardGroupsAndQuadrasWidget v-bind="data" :showPopulation="true" />
            </div>
          </template>
        </SociotypeCard>

        <SociotypeCardYungs v-if="isCardTab" :yungs="data.yungs" />

        <BlockFunctionsListWidget v-if="isCardTab" :sociotypeId="data.id" />

        <div style="margin-top: 12px; margin-bottom: 8px;">
          <SociotypesTabsWidget />
        </div>

        <template v-if="isCardTab">
          <SociotypeSignsBlock title="Краткое описание">
            <UiDismissibleInfo storage-key="sociotypes-precision-info">
              <template #title>
                <UiText preset="large" color="black">О точности описаний</UiText>
              </template>
              <UiText preset="body" color="black">
                Описания — ориентиры, а не ярлыки. Не всё совпадёт с каждым. Сверяйте с наблюдениями и независимыми оценками.
              </UiText>
            </UiDismissibleInfo>
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

    <CharacteristicInsideBottomSheetWidget />
    <FunctionInsideBottomSheetWidget :sociotype-id="sociotypeId" />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
.sociotype-layout {
  display: flex;
  flex-direction: column;
  gap: 0;
  background-color: colors.$white;

  &__card {
    cursor: pointer;
  }
}

.sociotype-card__population {
  position: absolute;
  bottom: 12px;
  left: 12px;
  padding: 4px 6px;
  border-radius: 4px;
  background: var(--color-role);
  background: color-mix(in srgb, var(--color-role) 10%, transparent);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-role);
    opacity: 0.1;
    border-radius: 4px;
    z-index: -1;
  }

  @supports (background: color-mix(in srgb, red 10%, transparent)) {
    &::before {
      display: none;
    }
  }
}


</style>
