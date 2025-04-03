<script lang="ts" setup>
import type { SociotypeDataType, SociotypeIdType } from "@types";
import { debounce } from "@shared/lib";
import { useInjectAppRoutes } from "@shared/hooks/useAppRoutes";

import useSociotypesAround from "../lib/hooks/useSociotypesAround";
import scrollCarousel from "../lib/scrollCarousel";
import SociotypeCarouselControls from "./SociotypeCarouselControls.vue";

const router = useRouter();
const appRoutes = useInjectAppRoutes();

const { prevSociotype, currentSociotype, nextSociotype, activeTab } =
  useSociotypesAround();

const sociotypeList = ref<SociotypeDataType[]>([toValue(currentSociotype)]);

const container = useTemplateRef<HTMLElement>("carousel-container");

const updateCarouselItems = () => {
  sociotypeList.value = [
    toValue(prevSociotype),
    toValue(currentSociotype),
    toValue(nextSociotype),
  ];
};

const resetCarouselScroll = () => {
  nextTick(() => {
    scrollCarousel(toValue(container), 1, "auto");
  });
};

const onScroll = debounce((e: Event) => {
  const container = e.target as HTMLElement;
  const elementWidth = container.clientWidth;

  if (container.scrollLeft % elementWidth === 0) {
    let activeIndex = Math.round(container.scrollLeft / elementWidth);

    if (activeIndex !== 1) {
      router.push(
        appRoutes.sociotypeTab(
          sociotypeList.value[activeIndex].id,
          activeTab.value.name,
        ),
      );
    }
  }
}, 100);

const switchSociotype = (id: SociotypeIdType) => {
  scrollCarousel(
    toValue(container),
    sociotypeList.value.findIndex((s) => s.id === id),
    "smooth",
  );
};

onMounted(() => {
  // Для того чтобы показывать соседей только на клиенте и только после того как все отрендерилось
  updateCarouselItems();
  resetCarouselScroll();
});

watch(() => toValue(currentSociotype).id, updateCarouselItems);
</script>

<template>
  <SociotypeCarouselControls @switch="switchSociotype" />

  <div class="sociotype-carousel">
    <div
      ref="carousel-container"
      class="sociotype-carousel__container"
      @scroll="onScroll"
    >
      <div
        v-for="sociotype in sociotypeList"
        :key="sociotype.id"
        class="sociotype-carousel__sociotype"
      >
        <slot v-bind="{ sociotypeId: sociotype.id }" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/layouts";

.sociotype-carousel {
  max-width: layouts.$maxWidth;
  min-width: layouts.$minWidth;
  min-height: 100dvh;

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      opacity: 0;
      scroll-behavior: smooth;
    }
  }

  &__sociotype {
    flex: 1 0 100%;
    width: 100%;
    min-height: 100dvh;
    scroll-snap-align: center;
    padding: 0 4px;
  }
}
</style>
