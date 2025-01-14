<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{ isShow: boolean }>();
const emit = defineEmits(["afterEnter", "afterLeave"]);
</script>

<template>
  <Transition
    name="ui-backdrop--animate"
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
  transition: opacity 130ms ease;
  overflow: hidden;

  &--animate-enter-from,
  &--animate-leave-to {
    opacity: 0;
  }
}
</style>
