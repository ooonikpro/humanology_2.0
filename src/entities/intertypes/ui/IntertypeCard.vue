<script lang="ts" setup>
import type { IntertypeDataType } from "@types";

const props = defineProps<IntertypeDataType>();
</script>

<template>
  <UiDescriptionCard
    class="intertype-card"
    :to="$appRoutes.intertypeDescription(props.id)"
    :title="props.name"
    chevron-color="intertype"
  >
    <template #icon>
      <UiSvg :name="props.id" size="96" color="intertype" />
    </template>
    <template #after-title>
      <UiBadge bg="intertype" small>{{ props.lvl }}</UiBadge>
    </template>

    <UiText preset="large">
      {{ props.shortDescription }}
    </UiText>

    <UiTags
      class="intertype-card__tags"
      :tags="props.positiveTags.slice(0, 2)"
      bg="intertype"
      small
    />
  </UiDescriptionCard>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$space-for-bg: 4px;
$card-padding: 12px;

.intertype-card {
  position: relative;
  background-color: transparent !important;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: colors.$bg-intertype;
    border-radius: inherit;
    z-index: -1;
    opacity: 0.75;
  }

  &__tags {
    opacity: 0.75;
  }
}
</style>
