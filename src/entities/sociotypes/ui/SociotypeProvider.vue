<script lang="ts" setup>
import { defineProps } from "vue";
import useSociotypeData from "../lib/hooks/useSociotypeData";
import useSociotypeColors from "../lib/hooks/useSociotypeColors";
import type { SociotypeIdType } from "@types";

const props = defineProps<{ id: SociotypeIdType }>();
const data = useSociotypeData(props.id);
const colors = useSociotypeColors(data);
</script>

<template>
  <div class="sociotype-provider" :style="colors">
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
