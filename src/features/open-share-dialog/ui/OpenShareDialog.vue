<script lang="ts" setup>
import { UiSvg } from "@shared/ui";
import type { IconSizeType, TextColorType } from "@types";

const { color = "accent", size = "24" } = defineProps<{
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
