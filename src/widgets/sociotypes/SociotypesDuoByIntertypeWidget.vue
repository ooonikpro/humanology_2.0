<script lang="ts" setup>
import type { Gender, IntertypeIdType, SociotypeIdType } from "@types";
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardHeader,
  SociotypeProvider,
} from "@entities/sociotypes";
import { IntertypeNameBlock, IntertypeProvider } from "@entities/intertypes";

const props = defineProps<{
  leftSociotypeId: SociotypeIdType;
  leftGender: Gender;
  rightSociotypeId: SociotypeIdType;
  rightGender: Gender;
  intertypeId: IntertypeIdType;
}>();
</script>

<template>
  <div class="sociotypes-duo-by-intertype">
    <SociotypeProvider
      v-slot="{ data: sociotypeData }"
      :id="props.leftSociotypeId"
      class="sociotypes-duo-by-intertype__card"
    >
      <SociotypeCard :data="sociotypeData" :gender="props.leftGender" mini>
        <template #header>
          <SociotypeCardHeader :data="sociotypeData" mini />
        </template>

        <template #groups-and-quadras>
          <SociotypeCardGroupsAndQuadras v-bind="sociotypeData" mini />
        </template>
      </SociotypeCard>
    </SociotypeProvider>

    <SociotypeProvider
      v-slot="{ data: sociotypeData }"
      :id="props.rightSociotypeId"
      class="sociotypes-duo-by-intertype__card"
    >
      <SociotypeCard :data="sociotypeData" :gender="props.rightGender" mini>
        <template #header>
          <SociotypeCardHeader :data="sociotypeData" mini />
        </template>

        <template #groups-and-quadras>
          <SociotypeCardGroupsAndQuadras v-bind="sociotypeData" mini />
        </template>
      </SociotypeCard>
    </SociotypeProvider>

    <IntertypeProvider
      v-slot="intertypeData"
      :intertypeId="props.intertypeId"
      class="sociotypes-duo-by-intertype__intertype"
    >
      <IntertypeNameBlock v-bind="intertypeData" />
    </IntertypeProvider>
  </div>
</template>

<style lang="scss" scoped>
$gap: 8px;

.sociotypes-duo-by-intertype {
  display: flex;
  flex-wrap: wrap;
  gap: $gap;

  &__card {
    width: calc(50% - $gap / 2);
  }

  &__intertype {
    width: 100%;
  }
}
</style>
