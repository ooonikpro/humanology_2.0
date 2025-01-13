<script lang="ts" setup>
import { UiSvg } from "@shared/ui";

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
    <UiSvg name="share" color="accent" size="24" />
  </button>
</template>

<style lang="scss" scoped></style>
