<script setup lang="ts">
import { computed } from "vue";
import type { SociotypeDataType } from "@types";
import { SociotypesFamousPeopleWidget } from "@widgets/sociotypes";
import { sociotypeModel } from "@entities/sociotypes";

const props = defineProps<{ data: SociotypeDataType }>();

const list = computed(() =>
  sociotypeModel.getFamousPeople((person) => person.id === props.data.id),
);
</script>

<template>
  <SociotypesFamousPeopleWidget :list="list" />
</template>
