<script setup lang="ts">
import type { IconSizeType } from "@types";

const props = defineProps<{
  size: IconSizeType | IconSizeType[];
  iconsAmount?: number;
}>();

const data = computed<IconSizeType[]>(() => {
  if (Array.isArray(props.size)) return props.size;
  return new Array(props.iconsAmount).fill(props.size);
});

const key = useId();
</script>

<template>
  <div class="main-navigation-icons-skeleton">
    <div
      v-for="size in data"
      :key="`${key}-${size}`"
      class="main-navigation-icons-skeleton__item"
      :style="{ '--skeleton-item-size': `${size}px` }"
    >
      {{ size }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.main-navigation-icons-skeleton {
  display: flex;
  flex-flow: row nowrap;
  gap: 2px;
  align-items: flex-start;

  &__item {
    flex: 0 0 var(--skeleton-item-size);
    width: var(--skeleton-item-size);
    height: var(--skeleton-item-size);
    animation: skeleton-loading 1s linear infinite alternate;
    color: rgba($color: #000000, $alpha: 0);
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: colors.$dark-grey;
  }
  100% {
    background-color: rgba(colors.$black, 0.3);
  }
}
</style>
