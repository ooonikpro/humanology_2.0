<script setup lang="ts">
import type { SociotypeIdType } from "@types";
import { SociotypesFamousPeopleWidget } from "@widgets/sociotypes";
import { sociotypeModel, useSociotypePageRoute } from "@entities/sociotypes";

const props = defineProps<{ sociotypeId?: SociotypeIdType }>();

const { sociotypeId } = useSociotypePageRoute();

sociotypeModel.fetchFamousPeople();

const list = sociotypeModel.getFamousPeople(
  (person) => person.id === (props.sociotypeId ?? toValue(sociotypeId)),
);
</script>

<template>
  <SociotypesFamousPeopleWidget :list="list" />
</template>
