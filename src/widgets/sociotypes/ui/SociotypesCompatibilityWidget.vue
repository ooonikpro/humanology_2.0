<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { SociotypeIdType } from "@types";

import {
  sociotypeModel,
  SociotypeCard,
  SociotypeCardHeader,
  SociotypeProvider,
  useSociotypePageRoute,
} from "@entities/sociotypes";
import {
  IntertypeGroupProvider,
  intertypeModel,
  IntertypeProvider,
  IntertypeWithSociotype,
} from "@entities/intertypes";
import SociotypesCardGroupsAndQuadrasWidget from "./SociotypesCardGroupsAndQuadrasWidget.vue";

const props = defineProps<{ sociotypeId?: SociotypeIdType }>();

const router = useRouter();
const { sociotypeId: routeSociotypeId } = useSociotypePageRoute();
</script>

<template>
  <div class="sociotypes-compatibility-widget">
    <IntertypeGroupProvider
      v-slot="{ intertypeGroupName, intertypeOrder }"
      v-for="intertypeGroupId in intertypeModel.getIntertypeGroupOrder()"
      :key="intertypeGroupId"
      :intertypeGroupId="intertypeGroupId"
      class="sociotypes-compatibility-widget__section"
    >
      <hr class="sociotypes-compatibility-widget__separator" />
      <UiText
        force-tag="h3"
        preset="large"
        color="intertype"
        class="sociotypes-compatibility-widget__title"
      >
        {{ intertypeGroupName }}
      </UiText>

      <IntertypeProvider
        v-slot="intertypeData"
        v-for="intertypeId in intertypeOrder"
        :key="intertypeId"
        :intertypeId="intertypeId"
      >
        <IntertypeWithSociotype v-bind="intertypeData">
          <SociotypeProvider
            v-slot="{ data: sociotypeData }"
            :id="
              sociotypeModel.getIntertypeRelations(
                props.sociotypeId ?? routeSociotypeId,
                intertypeId,
              )
            "
          >
            <SociotypeCard :data="sociotypeData" mini>
              <template #header>
                <SociotypeCardHeader :data="sociotypeData" mini />
              </template>

              <template #groups-and-quadras>
                <div class="sociotype-card__groups-quadras">
                  <SociotypesCardGroupsAndQuadrasWidget
                    v-bind="sociotypeData"
                    mini
                  />
                </div>
              </template>
            </SociotypeCard>
          </SociotypeProvider>
        </IntertypeWithSociotype>
      </IntertypeProvider>
    </IntertypeGroupProvider>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotypes-compatibility-widget {
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;

  &__section {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }

  &__separator {
    background-color: colors.$intertype;
  }
}
</style>
