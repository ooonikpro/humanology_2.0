<script setup lang="ts">
import { OpenShareDialog } from "@features/open-share-dialog";
import type { IconNameType } from "@types";

const props = defineProps<{
  title?: string;
  iconName: IconNameType;
}>();
</script>

<template>
  <div class="page-title-widget">
    <div class="page-title-widget__row">
      <UiSvg :name="props.iconName" color="accent" size="24" />
      <OpenShareDialog />
    </div>

    <div class="page-title-widget__row">
      <slot name="title">
        <UiText preset="subtitle" color="black">
          {{ props.title }}
        </UiText>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-title-widget {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__row {
    display: flex;
    justify-content: space-between;
  }
}
</style>
