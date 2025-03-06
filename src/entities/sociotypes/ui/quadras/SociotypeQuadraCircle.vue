<script lang="ts" setup>
import type { SociotypeIdType } from "@types";

const props = defineProps<{ id: SociotypeIdType }>();
</script>

<template>
  <UiSvg :name="`${props.id}-circle`" />
</template>
