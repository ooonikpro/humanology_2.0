<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
import type { IconName } from "./index";

interface Props {
  name: IconName;
}
const props = defineProps<Props>();

const Icon = computed(() => {
  const name = props.name[0].toUpperCase() + props.name.substring(1);
  const iconName = `${name}Icon`;
  return defineAsyncComponent(() => import(`./${iconName}.vue`));
});
</script>

<template>
  <component :is="Icon" class="icon"></component>
</template>

<style lang="scss" scoped>
/* */
</style>
