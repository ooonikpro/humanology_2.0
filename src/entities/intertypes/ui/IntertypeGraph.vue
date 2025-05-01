<script lang="ts" setup>
import type { IntertypeIdType } from "@types";
import model from "../model";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <NuxtImg
    :src="model.getIntertypeGraphSrc(props.intertypeId)"
    loading="lazy"
    class="intertype-graph"
  />
</template>

<style lang="scss" scoped>
.intertype-graph {
  width: 100%;
}
</style>
