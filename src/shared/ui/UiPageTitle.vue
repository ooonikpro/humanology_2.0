<script lang="ts" setup>
import UiText from "./UiText.vue";
import UiSvg from "./UiSvg.vue";

</script>

<template>
  <div class="ui-page-title">
    <div class="ui-page-title__double-icon">
      <UiSvg name="ghost" color="accent" size="24" />
      <UiSvg name="share" color="accent" size="24" />
    </div>
    <UiText preset="subtitle" color="black">
      <slot />
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.ui-page-title {
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
