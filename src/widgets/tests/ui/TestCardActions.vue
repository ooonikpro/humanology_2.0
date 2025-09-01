<script setup lang="ts">
import { OpenShareDialog } from "@features/open-share-dialog";

const props = defineProps<{ shareAriaLabel: string }>();
</script>

<template>
  <div class="test-card-actions">
    <UiBlock v-slot="{ classes }" variant="white">
      <OpenShareDialog
        :class="classes"
        :aria-label="props.shareAriaLabel"
        class="test-card-actions__share"
        color="black"
        size="20"
      />
    </UiBlock>
    <UiBlock v-slot="{ classes }">
      <button :class="[classes]" class="test-card-actions__button">
        Пройти тест
      </button>
    </UiBlock>
  </div>
</template>

<style lang="scss" scoped>
$share-button-width: 44px;

.test-card-actions {
  display: grid;
  grid-template-columns: $share-button-width 1fr;
  align-items: center;
  gap: 8px;

  &__share {
    padding: 0;
    width: 100%;
    border-radius: 12px;
  }

  &__button {
    min-width: 120px;
    width: 100%;
  }
}
</style>
