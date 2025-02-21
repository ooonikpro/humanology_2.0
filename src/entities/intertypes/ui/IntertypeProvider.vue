<script setup lang="ts">
import type { IntertypeIdType } from "@types";

import model from "../model";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div class="intertype-provider">
    <slot v-bind="model.getIntertype(props.intertypeId)" />
  </div>
</template>
