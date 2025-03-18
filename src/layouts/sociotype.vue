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
import { BlockFunctionsListWidget } from "@widgets/functions-and-blocks";
import DefaultLayout from "./default.vue";
import { appRoutes } from "../app/constants";
import getNextSociotypeId from "@entities/sociotypes/model/methods/getNextSociotypeId";
import getPrevSociotypeId from "@entities/sociotypes/model/methods/getPrevSociotypeId";
import type { SociotypeIdType } from "@types";
import { scrollContainerToElementByIndex } from "@shared/lib";

const { sociotypeId, isCardTab, activeTab } = useSociotypePageRoute();

const carousel = computed<[SociotypeIdType, SociotypeIdType, SociotypeIdType]>(
  () => [
    getPrevSociotypeId(sociotypeId.value),
    sociotypeId.value,
    getNextSociotypeId(sociotypeId.value),
  ],
);

const router = useRouter();

const carouselRef = useTemplateRef("carousel");
onMounted(() => {
  scrollContainerToElementByIndex(carouselRef.value!, 1, "auto");
});

watch(
  () => router.currentRoute.value.fullPath,
  async () => {
    await nextTick();
    scrollContainerToElementByIndex(carouselRef.value!, 1, "auto");
  },
);

const onScroll = (e: Event) => {
  const container = e.target as HTMLElement;
  const elementWidth = container.clientWidth;
  if (container.scrollLeft % elementWidth === 0) {
    let activeIndex = Math.round(container.scrollLeft / elementWidth);
    if (activeIndex !== 1) {
      router.push(
        appRoutes.sociotypeTab(
          carousel.value[activeIndex],
          activeTab.value.name,
        ),
      );
    }
  }
};
</script>

<template>
  <DefaultLayout>
    <SociotypeSwitcher
      :sociotype-id="sociotypeId"
      :sociotype-tab-name="activeTab.name"
    />
    <div ref="carousel" class="sociotype-layout__scroll" @scroll="onScroll">
      <SociotypeProvider
        v-for="(id, $carouselIndex) in carousel"
        :key="`${id}-${$carouselIndex}-card`"
        v-slot="{ data }"
        :id="id"
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

        <BlockFunctionsListWidget v-if="isCardTab" :sociotypeId="id" />

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
    </div>
  </DefaultLayout>
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
