<script setup lang="ts">
import { computed, defineProps } from "vue";
import type { IntertypeRelations } from "@types";
import { UiSvg, UiText } from "@shared/ui";

const props = defineProps<{
  title: string;
  iconName: IntertypeRelations;
  intertypeName: string;
  lvl: number;
}>();

const level = computed(() => (props.lvl > 0 ? "+" : "") + props.lvl);
</script>

<template>
  <article class="sociotype-intertype-card">
    <div class="sociotype-intertype-card-info">
      <UiSvg name="intertype-bg" class="sociotype-intertype-card-info__bg" />
      <UiText preset="small" class="sociotype-intertype-card-info__lvl">
        {{ level }}
      </UiText>
      <UiSvg
        :name="props.iconName"
        size="64"
        class="sociotype-intertype-card-info__icon"
      />
      <div class="sociotype-intertype-card-info__footer">
        <UiText
          force-tag="h4"
          preset="large"
          class="sociotype-intertype-card-info__title"
        >
          {{ props.title }}
        </UiText>
        <UiText
          preset="body"
          color="dark-grey"
          class="sociotype-intertype-card-info__intertype"
        >
          {{ props.intertypeName }}
        </UiText>
      </div>
    </div>

    <slot />
  </article>
</template>

<style lang="scss" scoped>
.sociotype-intertype-card {
  $space-for-bg: 4px;

  padding: 8px;
  display: grid;
  grid-template-columns: 150px 1fr;
  border-radius: 8px;

  background-color: var(--bg-intertype-group);

  &-info {
    padding: $space-for-bg 0;
    display: grid;
    grid-template-columns: 1fr 64px + 12px;
    grid-template-rows: max-content max-content;
    align-content: space-between;

    position: relative;

    &__bg {
      width: 100%;
      height: calc(100% + $space-for-bg);

      position: absolute;
      top: 0;
      left: 0;

      color: var(--color-intertype-group);
    }

    &__lvl {
      padding: 2px 4px;
      margin-bottom: auto;

      width: max-content;
      display: block;

      border-radius: 5px;
      background-color: var(--color-intertype-group);
    }

    &__icon {
      color: var(--color-intertype-group);
    }

    &__footer {
      grid-column: 1/3;
    }
  }
}
</style>
