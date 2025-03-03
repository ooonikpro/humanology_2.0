<script lang="ts" setup>
import type { IntertypeDataType } from "@types";
import { UiBadge, UiSvg, UiText } from "@shared/ui";

const props = defineProps<IntertypeDataType>();
</script>

<template>
  <RouterLink
    :to="$appRoutes.intertypeDescription(props.id)"
    class="intertype-card"
  >
    <UiSvg :name="props.id" size="96" color="intertype" />

    <div class="intertype-card__details">
      <div class="intertype-card__details-title">
        <UiText preset="subtitle-alternative">{{ props.name }}</UiText>
        <UiBadge bg="intertype" small>{{ props.lvl }}</UiBadge>
      </div>

      <UiText preset="large" class="intertype-card__details-description">
        {{ props.shortDescription }}
      </UiText>

      <div class="intertype-card__details-tags">
        <UiBadge
          v-for="tag in props.tags.slice(0, 2)"
          :key="tag"
          bg="intertype"
        >
          {{ tag }}
        </UiBadge>
      </div>
    </div>

    <UiSvg
      color="intertype"
      name="chevron-right"
      size="24"
      class="intertype-card__chevron"
    />
  </RouterLink>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$card-padding: 12px;

.intertype-card {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex: 1 0 auto;
  padding: $card-padding;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: colors.$bg-intertype;
    border-radius: inherit;
    z-index: -1;
    opacity: 0.6;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__details-description {
    margin-bottom: 8px;
  }

  &__details-title,
  &__details-tags {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__details-tags {
    opacity: 0.6;
  }

  &__chevron {
    margin-top: 22px - $card-padding;
    align-self: flex-start;
  }
}
</style>
