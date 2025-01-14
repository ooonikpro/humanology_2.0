<script lang="ts" setup>
import UiBackdrop from "./UiBackdrop.vue";
import UiSvg from "./UiSvg.vue";
import { ref } from "vue";

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);

const isShowBottomSheet = ref(false);
const isExpanded = ref(false);

const hideBackdrop = () => emit("close");

const showBottomSheet = () => (isShowBottomSheet.value = true);
const hideBottomSheet = () => {
  isShowBottomSheet.value = false;
  isExpanded.value = false;
};

const onScroll = (e) => {
  isExpanded.value = (e.target.scrollTop / e.target.scrollHeight) * 100 > 15;
};
</script>

<template>
  <Teleport to="body">
    <UiBackdrop
      :isShow="props.isOpen"
      @afterEnter="showBottomSheet"
      @click.self="hideBottomSheet"
    >
      <Transition name="ui-bottom-sheet--animate" @afterLeave="hideBackdrop">
        <div
          v-if="isShowBottomSheet"
          :class="{
            'ui-bottom-sheet--expanded': isExpanded,
          }"
          class="ui-bottom-sheet"
        >
          <header class="ui-bottom-sheet__header">
            <slot name="title"></slot>

            <button
              class="ui-bottom-sheet__close-button"
              @click="hideBottomSheet"
            >
              <UiSvg name="close" size="24" color="accent" />
            </button>
          </header>

          <div class="ui-bottom-sheet__body">
            <div class="ui-bottom-sheet__content" @scroll="onScroll($event)">
              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </UiBackdrop>
  </Teleport>
</template>

<style lang="scss" scoped>
@use "../styles/variables/layouts.scss";
@use "../styles/variables/colors.scss";

$gap: 8px;
$closeButtonSize: 24px;
$headerHeight: 36px;

.ui-bottom-sheet {
  position: fixed;
  width: 100%;
  height: 85%;
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
  transition: height 150ms ease;

  &__header {
    flex: 0 1 auto;
    width: 100%;
    height: $headerHeight;
    border-top: 1px solid colors.$quadra;
    padding: $gap ($gap * 2 + $closeButtonSize) $gap $gap;
    position: relative;

    &:before {
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

    &:after {
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

  &--expanded {
    height: 95%;
  }

  &--animate {
    &-enter-active {
      transition: transform 250ms cubic-bezier(0.38, 0.45, 0, 1.01);
    }

    &-leave-active {
      transition: transform 200ms ease-in;
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
