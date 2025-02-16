<script setup lang="ts">
import { computed } from "vue";
import type {
  IntertypeRelations,
  IntertypeRelationsGroupNameType,
} from "@types";
import useIntertypeColors from "../../lib/hooks/useIntertypeColors";
import model from "../../model";

const props = defineProps<{
  intertypeId?: IntertypeRelations;
  intertypeGroup: IntertypeRelationsGroupNameType;
}>();

const intertypeData = computed<{
  title: string;
  iconName: IntertypeRelations;
  intertypeName: string;
  lvl: number;
}>(() => {
  const relationData = model.getRelationData(props.intertypeId ?? "activity");
  return {
    title: relationData.name,
    iconName: props.intertypeId ?? "activity",
    intertypeName: relationData.description,
    lvl: relationData.lvl,
  };
});

const colors = useIntertypeColors(props.intertypeGroup);
</script>

<template>
  <div :style="colors" class="sociotype-intertype-provider">
    <slot v-bind="{ intertypeData }" />
  </div>
</template>

<style lang="scss" scoped></style>
