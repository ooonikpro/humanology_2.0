<script lang="ts" setup>
import type { IconNameType, IconSizeType } from "@types";

import { OpenShareDialog } from "@features/open-share-dialog";

const props = defineProps<{ iconName: IconNameType; iconSize?: Extract<IconSizeType, "32" | "80">; title?: string; subtitle?: string; }>();
</script>

<template>
  <div class="page-header-widget">
    <div class="page-header-widget__double-icon">
      <UiSvg :name="props.iconName" color="black" :size="props.iconSize" />
      <OpenShareDialog color="black" />
    </div>
    <slot>
      <div class="page-header-widget__text">
        <UiText preset="title-alternative" color="black">
          {{ props.title }}
        </UiText>
        <UiText preset="body" color="accent">
          {{ props.subtitle }}
        </UiText>
      </div>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.page-header-widget {
  padding: 12px 8px 12px 0;
  border-bottom: solid 1px colors.$grey;
  margin-bottom: 8px;

  &__text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__double-icon {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
}
</style>
