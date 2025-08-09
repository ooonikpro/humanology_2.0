<script lang="ts" setup>
import type { RouteLocationRaw } from "vue-router";
import type { IconNameType } from "@types";

const props = defineProps<{
  iconName?: IconNameType;
  to: RouteLocationRaw;
  title: string;
  subtitle?: string;
  tags?: string[];
}>();
</script>

<template>
  <UiDescriptionCard
    :to="props.to"
    :tags="props.tags"
    :title="props.title"
    class="aspect-description"
    title-color="accent"
  >
    <template v-if="props.iconName" #icon>
      <UiSvg
        :name="props.iconName"
        class="aspect-description__icon"
        size="80"
        color="accent"
      />
    </template>

    <UiText v-if="props.subtitle" preset="body">
      {{ props.subtitle }}
    </UiText>

    <slot />

    <UiTags v-if="props.tags" :tags="props.tags" bg="white" color="accent" small />
  </UiDescriptionCard>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.aspect-description {
  border-radius: 12px;
  gap: 12px;

  &__icon {
    align-self: flex-start;
  }
}
</style>
