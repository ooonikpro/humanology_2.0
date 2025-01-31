<script setup lang="ts">
import { sociotypeModel } from "@entities/sociotypes";
import { SociotypesFamousPeopleWidget } from "@widgets/sociotypes";
</script>

<template>
  <SociotypesFamousPeopleWidget :list="sociotypeModel.getFamousPeople()" />
</template>
