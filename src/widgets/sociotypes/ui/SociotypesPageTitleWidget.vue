<script lang="ts" setup>
import { OpenShareDialog } from "@features/open-share-dialog";
import { useSociotypePageRoute } from "@entities/sociotypes";

const { activeTab } = useSociotypePageRoute();
</script>

<template>
  <div class="page-title-widget">
    <div class="page-title-widget__double-icon">
      <UiSvg :name="activeTab.iconName" color="accent" size="24" />
      <OpenShareDialog />
    </div>
    <slot>
      <UiText preset="subtitle" color="black">
        {{ activeTab.label }}
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
