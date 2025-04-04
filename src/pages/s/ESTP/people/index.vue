<script setup lang="ts">
import type { SociotypeIdType } from "@types";
import { SociotypesFamousPeopleWidget } from "@widgets/sociotypes";
import { useSociotypePageRoute } from "@entities/sociotypes";

const props = defineProps<{ sociotypeId?: SociotypeIdType }>();

const { sociotypeId } = useSociotypePageRoute();
</script>

<template>
  <SociotypesFamousPeopleWidget
    :sociotypeId="props.sociotypeId ?? sociotypeId"
  />
</template>
