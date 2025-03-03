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
  <button @click="onClick" class="share" >
    <UiSvg :color="black" :size="size" name="share" />
  </button>
</template>


<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.share { 
  cursor: pointer;
  opacity: 0.8;
  
  :hover {
    opacity: 1;
  }
}

</style>
