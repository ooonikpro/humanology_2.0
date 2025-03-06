<script setup lang="ts">
import type { SociotypeDataType } from "@types";

const props = defineProps<{ data: SociotypeDataType }>();

const Content = defineAsyncComponent(
  () => import(`./content/${props.data.id}.vue`),
);
</script>

<template>
  <div class="how-to-define">
    <div class="how-to-define__text-block">
      <component :is="Content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.how-to-define {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__text-block {
    padding: 0 8px 24px 8px;
  }
}
</style>
