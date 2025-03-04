<script lang="ts" setup>
import { UiSvg, UiText } from "@shared/ui";
import type { IntertypeDataType } from "@types";

const props = defineProps<IntertypeDataType>();
</script>

<template>
  <div class="intertype-name-block">
    <UiSvg :name="props.id" size="24" />
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
  align-items: left;
  justify-content: space-between;
  height: 36px;
  background-color: colors.$intertype;
  border-radius: 4px;
  padding: 8px;
}
</style>
