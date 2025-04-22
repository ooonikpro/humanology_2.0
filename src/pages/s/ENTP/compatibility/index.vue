<script setup lang="ts">
import { SociotypesCompatibilityWidget } from "@widgets/sociotypes";
import type { SociotypeIdType } from "@types";

const props = defineProps<{ sociotypeId?: SociotypeIdType }>();
</script>

<template>
  <div class="text">
    <SociotypesCompatibilityWidget :sociotypeId="props.sociotypeId" />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
