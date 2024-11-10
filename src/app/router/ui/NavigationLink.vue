<script lang="ts" setup>
import type { RouteParams } from "vue-router";
import { type RouteNameType } from "../config/routes";

interface Props {
  url?: string;
  name: RouteNameType;
  params?: RouteParams;
}
const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="props.url ?? { name: props.name, params: props.params }"
    class="navigation-link"
  >
    <slot></slot>
  </RouterLink>
</template>

<style lang="scss" scoped>
/* */
</style>
