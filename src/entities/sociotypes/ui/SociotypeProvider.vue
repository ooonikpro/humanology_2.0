<script lang="ts" setup>
import type { SociotypeIdType } from "@types";

import useSociotypeColors from "../lib/hooks/useSociotypeColors";
import model from "../model";

const { forceTag = "div", ...props } = defineProps<{
  id: SociotypeIdType;
  forceTag?: keyof HTMLElementTagNameMap;
}>();

const data = computed(() => model.getSociotypeBy(props.id));
const quadra = computed(() => toValue(data).quadra);
const role = computed(() => toValue(data).role);

const colors = useSociotypeColors({ quadra, role });
</script>

<template>
  <component :is="forceTag" :style="colors" class="sociotype-provider">
    <slot :data="data" />
  </component>
</template>

<style lang="scss" scoped>
.sociotype-provider {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
