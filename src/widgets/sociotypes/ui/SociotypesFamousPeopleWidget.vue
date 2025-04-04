<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import {
  SociotypeCard,
  SociotypeCardFooter,
  SociotypeCardPhoto,
  SociotypeProvider,
  SociotypeCardPersonDetails,
  useFamousPeople,
} from "@entities/sociotypes";
import { getImage } from "@shared/lib";

const props = defineProps<{ sociotypeId?: SociotypeIdType }>();

const { data: famousPeople } = useFamousPeople(props.sociotypeId);
</script>

<template>
  <div class="sociotypes-famous-people-widget">
    <SociotypeProvider
      v-slot="{ data }"
      v-for="person in famousPeople"
      :key="person.name"
      :id="person.id"
    >
      <SociotypeCard :data="data" :gender="person.gender">
        <template #photo>
          <SociotypeCardPhoto :src="getImage(person.photo)" />
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
