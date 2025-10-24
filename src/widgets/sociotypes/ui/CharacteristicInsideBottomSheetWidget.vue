<script setup lang="ts">
import type { SociotypeIdType } from "@types";

import { SociotypeBottomSheetByQuery } from "@features/open-bottom-sheet-by-query";
import CharacteristicInsideBottomSheetContent from "./CharacteristicInsideBottomSheetContent.vue";

const props = defineProps<{ sociotypeId: SociotypeIdType }>();
</script>

<template>
  <SociotypeBottomSheetByQuery
    :sociotype-id="props.sociotypeId"
    :accepted-query="['ch', 'v']"
  >
    <template #default="{ data }">
      <CharacteristicInsideBottomSheetContent
        :characteristic="data.ch"
        :value="data.v"
      />
    </template>
  </SociotypeBottomSheetByQuery>
</template>

<style lang="scss" scoped></style>
