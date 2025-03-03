<script lang="ts" setup>
import {
  clearAllBodyScrollLocks,
  enableBodyScroll,
  disableBodyScroll,
} from "body-scroll-lock";
import {
  defineProps,
  defineEmits,
  computed,
  ref,
  inject,
  onUnmounted,
  type ShallowRef,
  watch,
} from "vue";
import { useSwipe } from "@shared/hooks/useSwipe";

import UiSvg from "./UiSvg.vue";

const layoutRef = inject("layoutRef") as Readonly<ShallowRef<HTMLElement>>;

const props = defineProps<{ isOpen: boolean }>();

const emit = defineEmits<{
  close: [];
  afterClose: [];
}>();

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

const pointermove = computed(() => (isSwiping.value ? "pointermove" : ""));
const pointerup = computed(() => (isSwiping.value ? "pointerup" : ""));
const pointerleave = computed(() => (isSwiping.value ? "pointerleave" : ""));

const showBottomSheet = () => {
  isShowBottomSheet.value = true;
};

const hideBottomSheet = () => {
  isShowBottomSheet.value = false;
};

const hideBackdrop = () => {
  emit("close");
  swipeValue.value = 0;
};

const afterClose = () => {
  emit("afterClose");
};

watch(
  () => props.isOpen,
  (newState) => {
    if (newState) {
      disableBodyScroll(layoutRef.value);
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(layoutRef.value);
      enableBodyScroll(document.body);
    }
  },
  {
    immediate: true,
  },
);

onUnmounted(() => {
  clearAllBodyScrollLocks();
});
</script>

<template>
  <Transition
    name="ui-backdrop--animate"
    appear
    @afterEnter="showBottomSheet"
    @afterLeave="afterClose"
    @click.self="hideBottomSheet"
  >
    <div v-if="props.isOpen" class="ui-backdrop">
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
            <div class="ui-bottom-sheet__content">
              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@use "../styles/variables/layouts.scss";
@use "../styles/variables/colors.scss";
@use "../styles/variables/layers";
@use "../styles/mixins/transitions";

$gutter: 70px;
$gap: 8px;
$closeButtonSize: 24px;
$headerHeight: 36px;
$translate: v-bind(swipePercentValue);

$opacity-transition: opacity 150ms ease;
$transform-transition: transform 150ms ease;
$height-transition: height 150ms ease;

.ui-backdrop {
  position: fixed;
  top: -$gutter;
  left: 0;
  right: 0;
  bottom: -$gutter;
  padding: $gutter 0;
  z-index: layers.$z-index-app-backdrop;
  background-color: colors.$dark-grey;
  transition: $opacity-transition;
  overflow: hidden;

  touch-action: none;

  &--animate-enter-from,
  &--animate-leave-to {
    opacity: 0;
  }
}

.ui-bottom-sheet {
  position: fixed;
  width: 100%;
  height: 80%;
  max-width: layouts.$maxWidth;
  min-width: layouts.$minWidth;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: colors.$white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: $height-transition, $transform-transition;

  transform: translateY($translate);
  touch-action: none;

  &__header {
    flex: 0 1 auto;
    width: 100%;
    height: $headerHeight;
    border-top: 1px solid colors.$quadra;
    padding: $gap ($gap * 2 + $closeButtonSize) $gap $gap;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: linear-gradient(
        -156.36deg,
        transparent 10.56%,
        colors.$quadra 98.41%
      );

      opacity: 0.1;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: $gap;
      right: $gap;
      height: 1px;
      background-color: colors.$grey;
    }
  }

  &__close-button {
    position: absolute;
    top: $gap;
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
    padding: $gap;
  }

  &--swiping {
    transition: $height-transition;
  }

  &--animate {
    &-enter-active {
      transition: transform 150ms cubic-bezier(0.38, 0.45, 0, 1.01);
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
