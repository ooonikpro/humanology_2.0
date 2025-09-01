<script setup lang="ts">
import type { IconNameType } from "@types";

const props = defineProps<{ iconName: IconNameType; label: string }>();
</script>

<template>
  <UiBadge color="black" bg="white" class="test-card-badge">
    <template #icon>
      <UiSvg :name="props.iconName" color="black" size="16" />
    </template>
    {{ props.label }}
  </UiBadge>
</template>

<style lang="scss" scoped>
.test-card-badge {
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
