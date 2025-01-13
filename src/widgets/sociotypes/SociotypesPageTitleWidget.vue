<script lang="ts" setup>
import type { IconNameType } from "@types";
import { UiText, UiSvg } from "@shared/ui";
import { OpenShareDialog } from "@features/open-share-dialog";

const props = defineProps<{ iconName: IconNameType; title?: string }>();
</script>

<template>
  <div class="page-title-widget">
    <div class="page-title-widget__double-icon">
      <UiSvg :name="props.iconName" color="accent" size="24" />
      <OpenShareDialog />
    </div>
    <slot>
      <UiText preset="subtitle" color="black">
        {{ props.title }}
      </UiText>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.page-title-widget {
  padding: 8px 8px 16px 8px;
  border-bottom: solid 1px colors.$grey;
  margin-bottom: 8px;

  &__double-icon {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
}
</style>
