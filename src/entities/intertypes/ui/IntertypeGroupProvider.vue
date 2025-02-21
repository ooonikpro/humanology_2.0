<script setup lang="ts">
import type { IntertypeGroupIdType } from "@types";
import useIntertypeColors from "../lib/hooks/useIntertypeColors";
import { intertypeModel } from "@entities/intertypes";

const props = defineProps<{ intertypeGroupId: IntertypeGroupIdType }>();

const colors = useIntertypeColors(props.intertypeGroupId);
</script>

<template>
  <div :style="colors" class="intertype-group-provider">
    <slot
      v-bind="{
        intertypeGroupName: intertypeModel.getIntertypeGroupName(
          props.intertypeGroupId,
        ),
        intertypeOrder: intertypeModel.getIntertypeOrder(
          props.intertypeGroupId,
        ),
      }"
    />
  </div>
</template>
