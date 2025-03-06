<script lang="ts" setup>
import type { QuadrasType } from "@types";

import model from "../../model";
import useSociotypeColors from "../../lib/hooks/useSociotypeColors";
import SociotypeQuadraIconsBlock from "./SociotypeQuadraIconsBlock.vue";

const quadrasList = model.getQuadras();
const activeQuadra = ref<QuadrasType>("air");

const styles = useSociotypeColors({ quadra: activeQuadra });
const subtitles = computed(() =>
  model.getQuadraSubtitles(toValue(activeQuadra)),
);

const onScroll = (e: Event) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const value = Math.round(e.target.scrollLeft / e.target.clientWidth);
  activeQuadra.value = quadrasList[value];
};
</script>

<template>
  <div :style="styles" class="sociotype-quadras-group">
    <div class="sociotype-quadras-group__header">
      <UiText color="quadra" class="sociotype-quadras-group__active-quadra">
        <UiSvg
          :name="activeQuadra"
          size="20"
          class="sociotype-quadras-group__active-quadra-icon"
        />
        {{ model.getQuadraLabel(activeQuadra) }}
      </UiText>

      <SociotypeQuadraIconsBlock
        :activeQuadra="activeQuadra"
        class="sociotype-quadras-group__icons"
      />

      <div class="sociotype-quadras-group__subtitles">
        <UiText
          v-for="subtitle in subtitles"
          :key="subtitle"
          preset="small"
          color="quadra"
        >
          {{ subtitle }}
        </UiText>
      </div>
    </div>

    <div class="sociotype-quadras-group__body">
      <div class="sociotype-quadras-group__scrollable" @scroll="onScroll">
        <div
          v-for="quadra in quadrasList"
          :key="quadra"
          class="sociotype-quadras-group__column"
        >
          <div
            v-for="id in model.getSociotypesByQuadra(quadra)"
            :key="id"
            class="sociotype-quadras-group__card"
          >
            <slot v-bind="{ id }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.sociotype-quadras-group {
  @include transitions.ease(border-top, background-color);

  border-radius: 4px;
  border-top: 1px solid colors.$quadra;
  background-color: colors.$bg-quadra;

  &__header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    position: relative;
  }

  &__active-quadra {
    @include transitions.ease(color);

    display: flex;
    align-items: center;
    gap: 4px;

    &-icon {
      width: 20px;
      height: 20px;
    }
  }

  &__icons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &__subtitles {
    @include transitions.ease(color);

    display: flex;
    gap: 4px;

    *:first-child {
      opacity: 0.5;
    }
  }

  &__body {
    overflow: hidden;
  }

  &__scrollable {
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

  &__column {
    flex: 1 0 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 8px;
    padding: 0 8px 16px;
    scroll-snap-align: center;
  }

  &__card {
    width: calc(50% - 8px);
  }
}
</style>
