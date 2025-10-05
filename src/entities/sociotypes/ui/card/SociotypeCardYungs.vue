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
      :color="$index === 0 ? 'role' : 'dark-grey'"
      preset="small"
    >
      {{ model.getYungDichtomyLabel(yung) }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-card-yungs {
  padding: 0 8px;
  padding-top: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: relative;
  background-color: colors.$white;
  border: 0;
}
</style>
