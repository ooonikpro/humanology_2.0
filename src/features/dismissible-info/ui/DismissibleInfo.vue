<script setup lang="ts">
import UiDismissibleInfo from "@shared/ui/UiDismissibleInfo.vue";
import { ref, onBeforeMount } from "vue";

const { initiallyVisible = true, ...props } = defineProps<{
  storageKey: string;
  initiallyVisible?: boolean;
}>();

const isVisible = ref(initiallyVisible);
const close = () => {
  isVisible.value = false;
  localStorage.setItem(props.storageKey, "hidden");
};

onBeforeMount(() => {
  const stored = localStorage.getItem(props.storageKey);
  isVisible.value = stored !== "hidden";
});
</script>

<template>
  <UiDismissibleInfo v-if="isVisible" @close="close">
    <slot />
  </UiDismissibleInfo>
</template>

<style lang="scss" scoped></style>
