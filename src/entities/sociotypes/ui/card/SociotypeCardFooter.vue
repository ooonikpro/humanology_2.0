<script lang="ts" setup>
import { defineProps } from "vue";
import type { SociotypeDataType } from "@types";
import { UiText } from "@shared/ui";

import model from "../../model";

const props = defineProps<Pick<SociotypeDataType, "yungs">>();
</script>

<template>
  <div class="sociotype-card-footer">
    <div class="sociotype-card-footer__gradient"></div>
    <hr class="sociotype-card-footer__line" />

    <UiText
      v-for="(yung, $index) in props.yungs"
      :key="yung"
      :color="$index > 0 ? 'grey' : 'black'"
      tag="span"
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

  &__gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150%;
    background: linear-gradient(
      180deg,
      rgba(colors.$white, 0) 45%,
      colors.$role 100%
    );
    opacity: 0.1;
  }

  &__line {
    width: 53%;
    position: absolute;
    height: 0;
    top: 0;
    border: 0;
    border-top: 1px dotted colors.$role;
  }
}
</style>
