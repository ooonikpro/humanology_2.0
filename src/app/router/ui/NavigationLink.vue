<script lang="ts" setup>
import {defineProps} from "vue";
import type { RouteParams } from "vue-router";
import { type RouteNameType } from "../config/routes";

type PropsType = {
  url?: string;
  name: RouteNameType;
  params?: RouteParams;
}

const props = defineProps<PropsType>();
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
