<script lang="ts" setup>
import { SociotypeQuadraIconsBlock } from "@entities/sociotypes";
import useSociotypesAround from "../lib/hooks/useSociotypesAround";
import type { SociotypeIdType } from "@types";

const emit = defineEmits<{ switch: [sociotypeId: SociotypeIdType] }>();

const { prevSociotype, currentSociotype, nextSociotype } =
  useSociotypesAround();
</script>

<template>
  <div class="sociotype-carousel-controls">
    <button
      class="sociotype-carousel-controls__link"
      @click="emit('switch', prevSociotype.id)"
    >
      <UiText force-tag="span" preset="small" color="dark-grey">
        ← {{ prevSociotype.name }}
      </UiText>
    </button>

    <NuxtLink
      :to="$appRoutes.sociotypes"
      class="sociotype-carousel-controls__link"
    >
      <SociotypeQuadraIconsBlock :activeQuadra="currentSociotype.quadra" />
    </NuxtLink>

    <button
      class="sociotype-carousel-controls__link"
      @click="emit('switch', nextSociotype.id)"
    >
      <UiText force-tag="span" preset="small" color="dark-grey">
        {{ nextSociotype.name }} →
      </UiText>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-carousel-controls {
  padding: 0 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 32px;
  border-radius: 12px;
  background-color: colors.$beige-tone;
  margin-top: 8px;

  &__link {
    background: none;
    outline: none;
    border: none;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__link:first-child {
    justify-content: flex-start;
  }

  &__link:last-child {
    justify-content: flex-end;
  }
}
</style>
