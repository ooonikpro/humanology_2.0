<script lang="ts" setup>
import {
  clearAllBodyScrollLocks,
  enableBodyScroll,
  disableBodyScroll,
} from "body-scroll-lock";

const props = defineProps<{ isShow: boolean }>();
const emit = defineEmits(["afterEnter", "afterLeave"]);

watch(
  () => props.isShow,
  (newState) => {
    if (newState) {
      disableBodyScroll(document.body);
    } else {
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
    @afterEnter="emit('afterEnter')"
    @afterLeave="emit('afterLeave')"
  >
    <div v-if="props.isShow" class="ui-backdrop">
      <slot />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@use "../styles/variables/layers";
@use "../styles/variables/colors";
@use "../styles/mixins/transitions";

$gutter: 70px;

.ui-backdrop {
  position: fixed;
  top: -$gutter;
  left: 0;
  right: 0;
  bottom: -$gutter;
  padding: $gutter 0;
  z-index: layers.$z-index-app-backdrop;
  background-color: colors.$dark-grey;
  transition: opacity 100ms ease;
  overflow: hidden;

  touch-action: none;

  &--animate-enter-from,
  &--animate-leave-to {
    opacity: 0;
  }
}
</style>
