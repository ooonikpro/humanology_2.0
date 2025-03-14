<script setup lang="ts">
import { SociotypesFamousPeopleWidget } from "@widgets/sociotypes";
import { sociotypeModel, useSociotypePageRoute } from "@entities/sociotypes";

const { sociotypeId } = useSociotypePageRoute();

sociotypeModel.fetchFamousPeople();

const list = sociotypeModel.getFamousPeople(
  (person) => person.id === toValue(sociotypeId),
);
</script>

<template>
  <SociotypesFamousPeopleWidget :list="list" />
</template>
