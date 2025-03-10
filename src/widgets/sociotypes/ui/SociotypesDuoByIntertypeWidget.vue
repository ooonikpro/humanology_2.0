<script lang="ts" setup>
import type { Gender, IntertypeIdType, SociotypeIdType } from "@types";
import {
  SociotypeCard,
  SociotypeCardGroupsAndQuadras,
  SociotypeCardHeader,
  SociotypeProvider,
} from "@entities/sociotypes";
import { IntertypeNameBlock, IntertypeProvider } from "@entities/intertypes";
import SociotypesCardMiniWidget from "@widgets/sociotypes/ui/SociotypesCardMiniWidget.vue";

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
    <SociotypesCardMiniWidget
      :sociotypeId="props.leftSociotypeId"
      :gender="props.leftGender"
      class="sociotypes-duo-by-intertype__card"
    />

    <SociotypesCardMiniWidget
      :sociotypeId="props.rightSociotypeId"
      :gender="props.rightGender"
      class="sociotypes-duo-by-intertype__card"
    />

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
