<script lang="ts" setup>
import type { QuadrasType } from "@types";
import { UiSvg } from "@shared/ui";

import model from "../../model";

const props = defineProps<{ activeQuadra: QuadrasType }>();
</script>

<template>
  <div class="sociotype-quadra-icons-block">
    <UiSvg
      v-for="quadra in model.getQuadras()"
      :key="quadra"
      :name="quadra"
      :class="{
        'sociotype-quadra-icons-block__icon--active':
          props.activeQuadra === quadra,
      }"
      size="16"
      class="sociotype-quadra-icons-block__icon"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/transitions";

.sociotype-quadra-icons-block {
  display: flex;
  align-items: center;
  gap: 4px;

  &__icon {
    @include transitions.ease(color, opacity);

    color: colors.$shadow;

    &--active {
      opacity: 1;
      color: colors.$quadra;
    }
  }
}
</style>
