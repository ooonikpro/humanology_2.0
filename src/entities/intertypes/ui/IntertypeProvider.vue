<script setup lang="ts">
import type { IntertypeIdType } from "@types";

import model from "../model";
import useIntertypeColors from "../lib/hooks/useIntertypeColors";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
const colors = useIntertypeColors(
  model.getIntertypeGroupById(props.intertypeId),
);
</script>

<template>
  <div :style="colors" class="intertype-provider">
    <slot v-bind="model.getIntertype(props.intertypeId)" />
  </div>
</template>
