<script lang="ts" setup>
import { UiSvg } from "@shared/ui";
import type { IconSizeType, TextColorType } from "@types";

const { color = "black", size = "24" } = defineProps<{
  color?: TextColorType;
  size?: IconSizeType;
}>();

const onClick = () => {
  const title = document.title;
  const text =
    document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content") ?? "";

  window.navigator.share({
    title,
    text,
    url: window.location.href,
  });
};
</script>

<template>
  <button @click="onClick">
    <UiSvg :color="color" :size="size" name="share" />
  </button>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

button {
  cursor: pointer;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
}
</style>
