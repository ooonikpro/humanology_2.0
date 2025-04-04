<script setup lang="ts">
import { SociotypesCompatibilityWidget } from "@widgets/sociotypes";
import type { SociotypeIdType } from "@types";

const props = defineProps<{ sociotypeId?: SociotypeIdType }>();
</script>

<template>
  <SociotypesCompatibilityWidget :sociotypeId="props.sociotypeId" />
</template>
