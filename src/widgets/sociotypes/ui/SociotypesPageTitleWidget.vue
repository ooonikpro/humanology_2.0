<script lang="ts" setup>
import { useSociotypePageRoute } from "@entities/sociotypes";
import PageTitleWidget from "../../PageTitleWidget.vue";

const { activeTab } = useSociotypePageRoute();
</script>

<template>
  <PageTitleWidget
    :title="activeTab.label"
    :icon-name="activeTab.iconName"
    class="sociotype-page-title-widget"
  >
    <template>
      <UiText preset="subtitle" color="black">
        {{ activeTab.label }}
      </UiText>
    </template>
  </PageTitleWidget>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-page-title-widget {
  padding-bottom: 16px;
  border-bottom: solid 1px colors.$grey;
  margin-bottom: 8px;
}
</style>
