<script lang="ts" setup>
import type { IconNameType } from "@types";
import { UiSvg, UiText } from "@shared/ui";
import { OpenShareDialog } from "@features/open-share-dialog";

const props = defineProps<{ iconName: IconNameType; title?: string }>();
</script>

<template>
  <div class="page-header-widget">
    <div class="page-header-widget__double-icon">
      <UiSvg :name="props.iconName" color="black" size="48" />
      <OpenShareDialog color="black" />
    </div>
    <slot>
      <UiText preset="title-alternative" color="black">
        {{ props.title }}
      </UiText>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.page-header-widget {
  padding: 12px 12px 12px 0;
  border-bottom: solid 1px colors.$grey;
  margin-bottom: 8px;

  &__double-icon {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
}
</style>
