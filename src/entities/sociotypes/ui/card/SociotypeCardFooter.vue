<script lang="ts" setup>
import { defineProps } from "vue";
import type { SociotypeDataType } from "@types";
import { UiText } from "@shared/ui";

import model from "../../model";

const props = defineProps<Pick<SociotypeDataType, "yungs">>();
</script>

<template>
  <div class="sociotype-card-footer">
    <hr class="sociotype-card-footer__line" />

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

.sociotype-card-footer {
  display: flex;
  gap: 6px;
  position: relative;
  padding: 8px;
  border: 0;
  border-bottom: 1px solid colors.$role;

  &__line {
    width: 53%;
    position: absolute;
    top: 0;
  }
}
</style>
