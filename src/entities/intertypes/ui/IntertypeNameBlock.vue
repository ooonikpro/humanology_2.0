<script lang="ts" setup>
import type { IntertypeDataType } from "@types";

const props = defineProps<IntertypeDataType>();
</script>

<template>
  <div class="intertype-name-block">
    <UiSvg :name="props.id" size="32" />
    <UiText preset="body">{{ props.name }}</UiText>
    <UiText preset="body">{{ props.lvl }}</UiText>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.intertype-name-block {
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: colors.$intertype;
  border-radius: 4px;
  padding: 8px 12px 8px 8px;
}
</style>
