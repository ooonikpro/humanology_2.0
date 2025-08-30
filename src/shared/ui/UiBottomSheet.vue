<script lang="ts" setup>
import useSwipe from "@shared/hooks/useSwipe";
import useBodyScrollLock from "@shared/hooks/useBodyScrollLock";

import UiBackdrop from "./UiBackdrop.vue";
import UiSvg from "./UiSvg.vue";

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{ close: []; afterClose: [] }>();
const scrollableContainer = useTemplateRef("scrollableContainer");

const {
  isSwiping,
  swipeValue,
  swipePercentValue,
  handleSwipeStart,
  handleSwipe,
  handleSwipeEnd,
} = useSwipe(
  (value) => value > 35,
  () => hideBottomSheet(),
);

const isShowBottomSheet = ref(false);
const isExpanded = ref(false);

const pointermove = computed(() => (isSwiping.value ? "pointermove" : ""));
const pointerup = computed(() => (isSwiping.value ? "pointerup" : ""));
const pointerleave = computed(() => (isSwiping.value ? "pointerleave" : ""));

const showBottomSheet = () => {
  isShowBottomSheet.value = true;
};
const hideBottomSheet = () => {
  isShowBottomSheet.value = false;
  isExpanded.value = false;
};

const hideBackdrop = () => {
  emit("close");
  swipeValue.value = 0;
};

const afterClose = () => {
  emit("afterClose");
};

useBodyScrollLock(isShowBottomSheet, scrollableContainer);
</script>

<template>
  <ClientOnly>
    <UiBackdrop
      :isShow="props.isOpen"
      @afterEnter="showBottomSheet"
      @afterLeave="afterClose"
      @click.self="hideBottomSheet"
    >
      <Transition name="ui-bottom-sheet--animate" @afterLeave="hideBackdrop">
        <div
          v-if="isShowBottomSheet"
          :class="{
            'ui-bottom-sheet--swiping': isSwiping,
          }"
          class="ui-bottom-sheet"
        >
          <header
            class="ui-bottom-sheet__header"
            @pointerdown.prevent="handleSwipeStart"
            @[pointermove].prevent="handleSwipe"
            @[pointerup].prevent="handleSwipeEnd"
            @[pointerleave].prevent="handleSwipeEnd"
          >
            <slot name="title"></slot>

            <button
              class="ui-bottom-sheet__close-button"
              @click="hideBottomSheet"
            >
              <UiSvg name="close" size="24" color="accent" />
            </button>
          </header>

          <div class="ui-bottom-sheet__body">
            <div ref="scrollableContainer" class="ui-bottom-sheet__content">
              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </UiBackdrop>
  </ClientOnly>
</template>

<style lang="scss" scoped>
@use "../styles/variables/layouts.scss";
@use "../styles/variables/colors.scss";

$gap: 8px;
$closeButtonSize: 24px;
$headerHeight: 36px;
$translate: v-bind(swipePercentValue);

$transform-transition: transform 150ms ease;
$height-transition: height 150ms ease;

.ui-bottom-sheet {
  position: fixed;
  width: 100%;
  height: 87%;
  max-width: layouts.$maxWidth;
  min-width: layouts.$minWidth;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: colors.$white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: $height-transition, $transform-transition;
  transform: translateY($translate);
  touch-action: none;

  &__header {
    flex: 0 0 auto;
    width: 100%;
    height: $headerHeight;
    background-color: colors.$beige-tone;
    padding: $gap ($gap * 2 + $closeButtonSize) $gap 12px;
    position: relative;
    border-radius: 12px;
  }

  &__close-button {
    position: absolute;
    top: 6px;
    right: $gap;
    width: $closeButtonSize;
    height: $closeButtonSize;
  }

  &__body {
    flex: 1 1 auto;
    width: 100%;
    overflow: hidden;
  }

  &__content {
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
    padding: 12px 12px 48px;
  }

  &--swiping {
    transition: $height-transition;
  }

  &--animate {
    &-enter-active {
      transition: transform 200ms cubic-bezier(0.38, 0.45, 0, 1.01);
    }

    &-leave-active {
      transition: $transform-transition;
    }

    &-enter-to {
      transform: translateY(0);
    }

    &-enter-from,
    &-leave-to {
      transform: translateY(100%);
    }
  }
}
</style>
