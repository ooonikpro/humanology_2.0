<script setup lang="ts">
import { defineProps, computed, ref, watch } from "vue";
import type { IconNameType } from "@types";
import { getIconMap } from "@shared/lib";

const iconMap = getIconMap();

const props = defineProps<{ name: IconNameType }>();

const svgBody = ref("");
const iconPromise = computed(() => iconMap[props.name]);

watch(
  iconPromise,
  async () => {
    if (iconPromise.value) {
      svgBody.value = await iconPromise.value();
    }
  },
  { immediate: true },
);
</script>

<template>
  <i class="ui-icon" :class="props.name" v-html="svgBody"></i>
</template>

<style lang="scss">
.ui-icon {
  display: inline-flex;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
