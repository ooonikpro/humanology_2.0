<script lang="ts" setup>
import type { SociotypeDataType } from "@types";

import model from "../../model";

const props = defineProps<Pick<SociotypeDataType, "yungs">>();
</script>

<template>
  <div class="sociotype-card-yungs">
    <hr class="sociotype-card-yungs__line" />

    <UiText
      v-for="(yung, $index) in props.yungs"
      :key="yung"
      :color="$index > 0 ? 'dark-grey' : 'black'"
      preset="small"
    >
      {{ model.getYungDichtomyLabel(yung) }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-card-yungs {
  display: flex;
  gap: 6px;
  position: relative;
  padding: 8px;
  border: 0;

  &__line {
    width: 53%;
    position: absolute;
    top: 0;
  }
}
</style>
