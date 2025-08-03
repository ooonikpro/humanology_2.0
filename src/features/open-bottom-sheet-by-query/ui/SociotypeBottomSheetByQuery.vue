<script setup lang="ts" generic="AcceptedQuery extends SociotypeQueryKeyType[]">
import type { LocationQuery } from "vue-router";
import type {
  SociotypeIdType,
  SociotypeQueryKeyType,
  // Используется в vue-generic
  /* eslint-disable-next-line */
  SociotypeQueryType,
} from "@types";

import { SociotypeProvider } from "@entities/sociotypes";
import OpenBottomSheetByQuery from "./OpenBottomSheetByQuery.vue";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  acceptedQuery: AcceptedQuery;
}>();

const checkQuery = (query: LocationQuery) =>
  props.acceptedQuery.every((queryKey) => query.hasOwnProperty(queryKey));
</script>

<template>
  <!-- @vue-generic {Required<Pick<SociotypeQueryType, AcceptedQuery[number]>>} -->
  <OpenBottomSheetByQuery
    v-slot="{ data, handleAfterClose, handleClose, isOpen }"
    :predicate="checkQuery"
  >
    <SociotypeProvider :id="props.sociotypeId">
      <UiBottomSheet
        :isOpen="isOpen"
        @close="handleClose"
        @afterClose="handleAfterClose"
      >
        <template #title>
          <div class="sociotype-bottom-sheet-title-group">
            <slot name="title" v-bind="{ data }" />
          </div>
        </template>

        <slot v-bind="{ data }" />
      </UiBottomSheet>
    </SociotypeProvider>
  </OpenBottomSheetByQuery>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-bottom-sheet-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
  color: colors.$quadra;
}
</style>
