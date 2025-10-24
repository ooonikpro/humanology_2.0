<script setup lang="ts">
import { NavigationTab } from "@entities/navigation";

const props = defineProps<{
  to: string;
  label: string;
  isNew?: boolean;
}>();

const isColumn = computed(() => !props.isNew);
</script>

<template>
  <NavigationTab :to="props.to" :is-column="isColumn" class="article-link">
    <template #label>
      <UiText
        preset="large"
        force-tag="span"
        color="black"
        class="article-link__title"
      >
        {{ props.label }}
      </UiText>
    </template>
    <template #icon>
      <slot name="icon" />
    </template>
    <template #top>
      <span v-if="props.isNew" class="article-link__new">
        <UiText color="earth">Свежая</UiText>
        <UiSvg name="leaf" color="earth" />
      </span>
    </template>
  </NavigationTab>
</template>

<style lang="scss" scoped>
@use "@shared/styles/mixins/transitions";
@use "@shared/styles/variables/colors";

.article-link {
  padding-top: 12px;
  gap: 40px;

  border: 1px solid colors.$beige;

  opacity: 1;
  @include transitions.ease(opacity);

  &:hover {
    opacity: 0.8;
  }

  &__title {
    width: 100%;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__new {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 4px;
  }
}
</style>
