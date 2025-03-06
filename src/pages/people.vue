<script setup lang="ts">
import { sociotypeModel } from "@entities/sociotypes";
import { SociotypesFamousPeopleWidget } from "@widgets/sociotypes";

sociotypeModel.fetchFamousPeople();

const famousPeople = sociotypeModel.getFamousPeople();
</script>

<template>
  <SociotypesFamousPeopleWidget :list="famousPeople" />
</template>
