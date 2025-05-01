<script lang="ts" setup>
import {
  SociotypeCard,
  SociotypeCardHeader,
  SociotypeProvider,
} from "@entities/sociotypes";
import type { Gender, SociotypeIdType } from "@types";
import { GenderEnum } from "@shared/constants";

import SociotypesCardGroupsAndQuadrasWidget from "./SociotypesCardGroupsAndQuadrasWidget.vue";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  gender?: Gender | GenderEnum;
}>();
</script>

<template>
  <SociotypeProvider
    v-slot="{ data: sociotypeData }"
    :class="$attrs.class ?? 'sociotypes-card-mini-widget'"
    :id="props.sociotypeId"
  >
    <SociotypeCard :data="sociotypeData" :gender="props.gender" mini>
      <template #header>
        <SociotypeCardHeader :data="sociotypeData" mini />
      </template>

      <template #groups-and-quadras>
        <SociotypesCardGroupsAndQuadrasWidget v-bind="sociotypeData" mini />
      </template>
    </SociotypeCard>
  </SociotypeProvider>
</template>

<style lang="scss" scoped>
.sociotypes-card-mini-widget {
  max-width: 50%;
}
</style>
