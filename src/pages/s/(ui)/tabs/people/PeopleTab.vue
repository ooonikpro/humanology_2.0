<script setup lang="ts">
import type { SociotypeDataType } from "@types";
import { SociotypesFamousPeopleWidget } from "@widgets/sociotypes";
import { sociotypeModel } from "@entities/sociotypes";

const props = defineProps<{ data: SociotypeDataType }>();

sociotypeModel.fetchFamousPeople();

const list = sociotypeModel.getFamousPeople(
  (person) => person.id === props.data.id,
);
</script>

<template>
  <SociotypesFamousPeopleWidget :list="list" />
</template>
