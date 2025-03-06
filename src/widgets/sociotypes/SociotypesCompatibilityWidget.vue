<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { SociotypeIdType } from "@types";
import { UiText } from "@shared/ui";
import {
  sociotypeModel,
  SociotypeCard,
  SociotypeCardHeader,
  SociotypeCardGroupsAndQuadras,
  SociotypeProvider,
} from "@entities/sociotypes";
import {
  IntertypeGroupProvider,
  intertypeModel,
  IntertypeProvider,
  IntertypeWithSociotype,
} from "@entities/intertypes";

const router = useRouter();
const props = defineProps<{ sociotypeId: SociotypeIdType }>();
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
                props.sociotypeId,
                intertypeId,
              )
            "
          >
            <SociotypeCard
              :data="sociotypeData"
              mini
              @click="router.push($appRoutes.sociotypeCard(sociotypeData.id))"
            >
              <template #header>
                <SociotypeCardHeader :data="sociotypeData" mini />
              </template>

              <template #groups-and-quadras>
                <SociotypeCardGroupsAndQuadras v-bind="sociotypeData" mini />
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
