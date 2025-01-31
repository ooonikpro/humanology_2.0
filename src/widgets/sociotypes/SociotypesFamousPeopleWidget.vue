<script lang="ts" setup>
import { defineProps } from "vue";
import type { FamousPersonType } from "@types";
import {
  SociotypeCard,
  SociotypeCardFooter,
  SociotypeCardPhoto,
  SociotypeProvider,
  SociotypeCardPersonDetails,
} from "@entities/sociotypes";

const props = defineProps<{ list: Array<FamousPersonType> }>();
</script>

<template>
  <div class="sociotypes-famous-people-widget">
    <SociotypeProvider
      v-slot="{ data }"
      v-for="person in props.list"
      :key="person.name"
      :id="person.id"
    >
      <SociotypeCard :data="data" :gender="person.gender">
        <template #photo>
          <SociotypeCardPhoto :src="person.photo" />
        </template>

        <template #footer>
          <SociotypeCardFooter v-bind="data" />
          <SociotypeCardPersonDetails v-bind="person" />
        </template>
      </SociotypeCard>
    </SociotypeProvider>
  </div>
</template>

<style lang="scss" scoped>
.sociotypes-famous-people-widget {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 8px;
}
</style>
