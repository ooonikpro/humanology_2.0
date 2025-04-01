<script setup lang="ts">
import type { QuadrasType } from "@types";
import useSociotypeColors from "../../lib/hooks/useSociotypeColors";

const props = defineProps<{ quadra: QuadrasType }>();

const styles = useSociotypeColors(props);
</script>

<template>
  <div :style="styles" class="sociotype-squashed-quadra" />
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-squashed-quadra {
  height: 12px;
  border-radius: 0 0 4px 4px;

  opacity: 0.1;
  background-color: colors.$quadra;
}
</style>
