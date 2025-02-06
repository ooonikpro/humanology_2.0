<script setup lang="ts">
import type { SociotypeDataType } from "@types";
import { SociotypesCompatibilityWidget } from "@widgets/sociotypes";

const props = defineProps<{ data: SociotypeDataType }>();
</script>

<template>
  <SociotypesCompatibilityWidget :sociotype-id="props.data.id" />
</template>
