<script lang="ts" setup>
import { computed, defineProps, toValue } from "vue";
import type { SociotypeIdType } from "@types";

import useSociotypeColors from "../lib/hooks/useSociotypeColors";
import model from "../model";

const props = defineProps<{ id: SociotypeIdType }>();

const data = computed(() => model.getSociotypeBy(props.id));
const quadra = computed(() => toValue(data).quadra);
const role = computed(() => toValue(data).role);

const colors = useSociotypeColors({ quadra, role });
</script>

<template>
  <div :style="colors" class="sociotype-provider">
    <slot :data="data" />
  </div>
</template>

<style lang="scss" scoped>
.sociotype-provider {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
