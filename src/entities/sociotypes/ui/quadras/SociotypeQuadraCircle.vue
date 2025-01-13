<script lang="ts" setup>
import { defineProps } from "vue";
import type { SociotypeIdType } from "@types";
import { UiSvg } from "@shared/ui";

const props = defineProps<{ id: SociotypeIdType }>();
</script>

<template>
  <UiSvg :name="`${props.id}-circle`" />
</template>
