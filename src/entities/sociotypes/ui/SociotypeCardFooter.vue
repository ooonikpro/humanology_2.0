<script lang="ts" setup>
import { defineProps } from "vue";
import type { SociotypeDataType } from "@types";
import { UiText } from "@shared/ui";

import model from "../model";

const props = defineProps<Pick<SociotypeDataType, "yungs">>();
</script>

<template>
  <div class="sociotype-card-footer">
    <hr class="sociotype-card-footer__line" />

    <UiText
      v-for="(yung, $index) in props.yungs"
      :key="yung"
      :color="$index > 0 ? 'grey' : 'black'"
      tag="span"
    >
      {{ model.getYungDichotomyLabel(yung) }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
.sociotype-card-footer {
  display: flex;
  gap: 6px;
  position: relative;
  padding: 8px;

  &__line {
    width: 53%;
    position: absolute;
    height: 0;
    top: 0;
    border-top: 1px dotted var(--color-role);
  }
}
</style>
