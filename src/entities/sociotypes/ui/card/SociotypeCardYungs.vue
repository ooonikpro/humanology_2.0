<script lang="ts" setup>
import type { SociotypeDataType } from "@types";

import model from "../../model";

const props = defineProps<Pick<SociotypeDataType, "yungs">>();
</script>

<template>
  <div class="sociotype-card-yungs">

    <UiText
      v-for="(yung, $index) in props.yungs"
      :key="yung"
      :color="$index === 0 ? 'role' : 'black'"
      :class="{ 'sociotype-card-yungs__secondary': $index !== 0 }"
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
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 0 8px;
  background-color: colors.$white;

  &__secondary {
    opacity: 0.5;
  }
}
</style>
